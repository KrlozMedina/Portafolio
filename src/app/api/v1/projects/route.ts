import connectDB from "@/lib/connectDB";
import Project from "@/model/Project";
import Technology from "@/model/Technology";
import { NextResponse } from "next/server";

// Interfaces
interface ProjectBody {
  title: string;
  slug?: string;
  description: string;
  technologies: string[];
  features?: string[];
  repositoryUrl: string;
  liveUrl: string;
  imageUrl: string;
  category?: string[];
  role?: string;
  teamSize?: number;
  duration?: string;
  priority: number;
  projectType: string[];
}

interface ErrorMongoDb {
  code: number;
  keyValue: Record<string, unknown>;
}

// Helper: Validate required fields
function validateRequiredFields(body: ProjectBody, fields: (keyof ProjectBody)[]): string[] {
  return fields.filter((field) => !body[field]);
}

// Helper: Generate slug
const generateSlug = (title: string) => title.replace(/\s+/g, "-").toLowerCase();

// Helper: Map technologies to categories
async function mapTechnologiesToCategories(technologies: string[]): Promise<string[]> {
  const categories = await Promise.all(
    technologies.map(async (tech) => {
      const technology = await Technology.findOne({ name: tech });
      return technology?.category || null;
    })
  );
  return categories.filter(Boolean) as string[];
}

// Centralized error response
function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

// CRUD Handlers

/** GET: Fetch all projects */
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (err) {
    console.error("Error fetching projects:", err);
    return errorResponse("Failed to fetch projects.", 500);
  }
}

/** POST: Create a new project */
export async function POST(req: Request) {
  try {
    await connectDB();
    const body: ProjectBody = await req.json();

    const requiredFields: (keyof ProjectBody)[] = [
      "title",
      "description",
      "technologies",
      "repositoryUrl",
      "liveUrl",
      "imageUrl",
      "priority",
      "projectType",
    ];

    const missingFields = validateRequiredFields(body, requiredFields);
    if (missingFields.length) {
      return errorResponse(`Missing fields: ${missingFields.join(", ")}.`, 400);
    }

    body.slug = generateSlug(body.title);
    if (body.technologies) {
      body.category = await mapTechnologiesToCategories(body.technologies);
    }

    const newProject = await new Project(body).save();
    return NextResponse.json({ message: "Project created successfully.", newProject }, { status: 201 });
  } catch (e) {
    const err = e as ErrorMongoDb;
    if (err.code === 11000) {
      return NextResponse.json({ error: "Duplicate project title.", duplicateKey: err.keyValue }, { status: 409 });
    }
    console.error("Error creating project:", err);
    return errorResponse("Failed to create project.", 500);
  }
}

/** PUT: Update an existing project */
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return errorResponse("Missing 'projectId' parameter.", 400);
    }

    const dataUpdate: Partial<ProjectBody> = await req.json();
    if (dataUpdate.title) {
      dataUpdate.slug = generateSlug(dataUpdate.title);
    }
    if (dataUpdate.technologies) {
      dataUpdate.category = await mapTechnologiesToCategories(dataUpdate.technologies);
    }

    const updatedProject = await Project.findByIdAndUpdate(projectId, dataUpdate, { new: true });
    if (!updatedProject) {
      return errorResponse("Project not found.", 404);
    }

    return NextResponse.json({ message: "Project updated successfully.", updatedProject }, { status: 200 });
  } catch (err) {
    console.error("Error updating project:", err);
    return errorResponse("Failed to update project.", 500);
  }
}

/** DELETE: Remove a project */
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return errorResponse("Missing 'projectId' parameter.", 400);
    }

    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) {
      return errorResponse("Project not found.", 404);
    }

    return NextResponse.json({ message: "Project deleted successfully." }, { status: 200 });
  } catch (err) {
    console.error("Error deleting project:", err);
    return errorResponse("Failed to delete project.", 500);
  }
}

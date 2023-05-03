import React, { useContext } from 'react'
import LenguajeContext from '../context/LenguajeContext'
import Header from '../components/organisms/Header'
import Hero from '../components/molecules/Hero'
import Application from '../components/organisms/Application'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'
import Popup from '../components/Popup'
import Banner from '../components/molecules/Banner'
import '../styles/pages/Home.css'

const educationData = [
  {
      "id": 1,
      "url": "https://www.udistrital.edu.co/inicio",
      "alt": "UD",
      "logo": "https://i.imgur.com/Hkn5iBH.png",
      "titulo": "Tecnologo en Electronica",
      "title": "Electronic Technologist"
  },
  {
      "id": 2,
      "url": "https://www.udistrital.edu.co/inicio",
      "alt": "UD",
      "logo": "https://i.imgur.com/Hkn5iBH.png",
      "titulo": "Ingeniero en Control y Automatización",
      "title": "Control and Automation Engineer"
  },
  {
      "id": 3,
      "url": "https://platzi.com/home",
      "alt": "Platzi",
      "logo": "https://i.imgur.com/Rd2SS4U.png",
      "titulo": "Desarrollador FrontEnd",
      "title": "FrontEnd Developer"
  },
  {
      "id": 4,
      "url": "https://app.aluracursos.com/",
      "alt": "Alura Latam",
      "logo": "https://i.imgur.com/DSl3dDo.png",
      "titulo": "Desarrollador BackEnd",
      "title": "BackEnd Developer"
  }
]

const codeData = [
  {
      "id": 4,
      "name": "HTML5",
      "logo": "https://i.imgur.com/JgltpME.png"
  },
  {
      "id": 5,
      "name": "CSS3",
      "logo": "https://i.imgur.com/Kpd0zcY.png"
  },
  {  
      "id": 6,
      "name": "JavaScript",
      "logo": "https://i.imgur.com/CHg6SwF.png"
  },
  {
      "id": 7,
      "name": "C++",
      "logo": "https://i.imgur.com/kQm8upj.png"
  },
  {
      "id": 8,
      "name": "Matlab",
      "logo": "https://i.imgur.com/tlE0JYH.png"
  },
  {
      "id": 9,
      "name": "React",
      "logo": "https://i.imgur.com/FFG1qVn.png"
  }
]

const Home = () => {
  const { isSpanish } = useContext(LenguajeContext)

  return (
    <>
      <div className="background__intersection"></div>
      <Header />

      <section className='container'>
        <Hero>
          {{
            "english": {
              "phrase": "Hi! I'm Carlos Alidio Medina López, Control and Automatization Engineer adn forming myself as Developer FullStack",
              "alt": "Personal photo"
            },
            "spanish": {
              "phrase": "Hola! Soy Carlos Alidio Medina López, Ingeniero en control y automatización y formándome como Desarrollador FullStack",
              "alt": "Foto personal"
            },
            "img": "https://i.imgur.com/LKFGgrC.png",
          }}
        </Hero>

        <section className="about__description">
          <h2 className='title'>{isSpanish ? "Sobre mi" : "About me"}</h2>

          <p className="about__description--text">
            {
              isSpanish
                ?
                "Soy un ingeniero en Control y Automatización altamente capacitado con una amplia gama de habilidades y conocimiento. En mi formación académica he usado varías herramientas tecnológicas para visualización, análisis y procesamiento de datos aprendiendo Java, C++, VHDL, Matlab, Python, PLC (ladder, grafset, estructurado diagrama de bloques), bases de datos y servicios en la nube de AWS y Azure. En el último año me he enfocado en el aprendizaje de desarrollo FrontEnd (JavaScript, HTML5, CSS3 y React) y he iniciado mi formación como desarrollador BackEnd con Java. Tengo habilidades en la resolución de problemas y análisis de datos."
                :
                "I am a highly trained Automation and Control Engineer with a wide range of skills and knowledge. In my academic training I have used various technological tools for data visualization, analysis and processing, learning Java, C++, VHDL, Matlab, Python, PLC (ladder, grafset, structured block diagram), databases and AWS cloud services and Azure. In the last year I have focused on learning FrontEnd development (JavaScript, HTML5, CSS3 and React) and I have started my training as a BackEnd developer with Java. I have skills in problem solving and data analysis."
            }
          </p>
          <p className="about__description--text">
            {
              isSpanish
                ?
                "Durante mi carrera profesional he logrado desarrollar habilidades técnicas en reparación de tarjetas electrónicas y obtener conocimiento practico de electrónica de potencia, telecomunicaciones y electricidad. He logrado adquirir habilidades de líder, proyección de tiempo y  creación de documentos para auditorias y certificación ISO 9001."
                :
                "During my professional career I have managed to develop technical skills in electronic board repair and gain practical knowledge of power electronics, telecommunications and electricity. I have managed to acquire leadership skills, time projection and document creation for audits and ISO 9001 certification."
            }
          </p>
          <p className="about__description--text">
            {
              isSpanish
                ?
                "Me apasiona la idea de desarrollar proyectos de transformación digital para grandes empresas y ayudar a las pequeñas y medianas empresas a obtener soluciones tecnológicas de producción a bajo costo."
                :
                "I am passionate about the idea of developing digital transformation projects for large companies and helping small and medium-sized companies to obtain low-cost production technology solutions."
            }
          </p>
          <p className="about__description--text">
            {
              isSpanish
                ?
                "Mi objetivo a largo plazo es seguir creciendo profesionalmente y contribuir al éxito de proyectos en transformación digital que tengan un impacto positivo en la sociedad. Estoy comprometido a utilizar mis habilidades y conocimientos, incluyendo mi habilidad para resolver problemas y analizar datos, para optimizar los procesos de producción y alcanzar resultados sobresalientes."
                :
                "My long-term goal is to continue growing professionally and contribute to the success of digital transformation projects that have a positive impact on society. I am committed to using my skills and knowledge, including my ability to solve problems and analyze data, to optimize production processes and achieve outstanding results."
            }
          </p>
        </section>

        <Application />
        
        <section id='education' className="main-education-container">
          <h2 className='title'>{isSpanish ? "Educación" : "Education"}</h2>

          <div className="education-cards-container">
            {
              educationData.map(education => (
                <Banner key={education.id}>{education}</Banner>
              ))
            }
          </div>

          <div className="education-code-container">
            {
              codeData.map(code => (
                <article key={code.id}>
                  <img className='education-code-logo' src={code.logo} alt="" />
                  <h3 className='education-code-name'>{code.name}</h3>
                </article>
              ))
            }
          </div>
        </section>

        <Contact />
        <Footer />
      </section>
      <Popup />
    </>
  )
}

export default Home

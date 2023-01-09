import React, { useContext, useEffect, useState } from 'react'
import LenguajeContext from '../../context/LenguajeContext';

import Card from '../molecules/Card';

import '../../styles/components/organisms/Projects.css'

const projectsData = [
  {
      "id": 1,
      "titulo": "Cronometro",
      "title": "Chronometer",
      "link": "https://krlozmedina.github.io/Cronometro/",
      "link-code": "https://github.com/KrlozMedina/Cronometro",
      "thumbnails": {
        "medium": {
          "url": "https://i.imgur.com/f7pXh08.png",
        }
      },
      "descripcion": "Cronometro y temporizador en una sola aplicación web",
      "description": "Stopwatch and timer in a single web application"
  },
  {
      "id": 2,
      "titulo": "Clon Batata Bit",
      "title": "Clone Batata Bit",
      "link": "https://krlozmedina.github.io/BatataBit/",
      "link-code": "https://github.com/KrlozMedina/BatataBit",
      "thumbnails": {
        "medium": {
          "url": "https://i.imgur.com/srOyMs3.png",
        }
      },
      "descripcion": "Clon de la pagina Batata Bit",
      "description": "Clone of the page Batata Bit"
  },
  {
      "id": 3,
      "titulo": "Perros aleatorios",
      "title": "Random Dogs",
      "link": "https://krlozmedina.github.io/RandomDogs/",
      "link-code": "https://github.com/KrlozMedina/Randomdogs",
      "thumbnails": {
        "medium": {
          "url": "https://i.imgur.com/hmeeYqQ.png",
        }
      },
      "descripcion": "Consumo de API de perros",
      "description": "API consumption of dogs"
  },
  {
      "id": 4,
      "titulo": "Pokemon",
      "title": "Pokemon",
      "link": "https://pokemon-32ua.onrender.com/",
      "link-code": "https://github.com/KrlozMedina/MyPokedesk",
      "thumbnails": {
        "medium": {
          "url": "https://i.imgur.com/DKlA2ut.png",
        }
      },
      "descripcion": "Mini juego usando la API de Pokemon",
      "description": "Mini game using the Pokemon API"
  },
  {
      "id": 5,
      "titulo": "Rick&Morty",
      "title": "Rick&Morty",
      "link": "https://rickandmorty-krlozmedina.netlify.app/",
      "link-code": "https://github.com/KrlozMedina/Rick-Morty",
      "thumbnails": {
        "medium": {
          "url": "https://i.imgur.com/8dloLlb.png",
        }
      },
      "descripcion": "Encuentra cualquier personaje de Rick&Morty",
      "description": "Find any Rick&Morty character"
  }
]

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCwr2Oy0BSvLWbukMAi_Nk7g&part=snippet%2Cid&order=date&maxResults=12';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '22dab2bc01msh2310900cbcea451p119d45jsna7f9a371b8e2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const Projects = () => {
  const {isSpanish, setIsSpanish} = useContext(LenguajeContext);
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(API, options)
      .then(res => res.json())
      .then(data => setVideos(data.items))
  }, [])

  return (
    <section id='projects' className="projects">
        <h2 className='projects__title'>{isSpanish ? "PROYECTOS" : "PROJECTS"}</h2>
        
        <div className="projects__cards">
          {
            projectsData.map(project => (
              <Card key={project.id}>{project}</Card>
            ))
          }
        </div>
        
        <div className="projects__cards">
          {
            videos.map(video => 
              (<div key={video.id.videoId}>
                <span className='none'>
                  {/* {console.log(video)} */}
                  {video.snippet.link = `https://www.youtube.com/watch?v=${video.id.videoId}`}
                  {video.snippet.type = 'youtube'}
                  {video.snippet.descripcion = video.snippet.description}
                </span>
                <Card>{video.snippet}</Card>
              </div>)
            )
          }
        </div>
      </section>
  )
}

export default Projects
import React, { useEffect, useState } from 'react'
import Slider from './Slider';

const API = "https://api-production-85f8.up.railway.app/projects";
// const API = "http://192.168.20.81:8081/projects";

const ApplicationDesktop = () => {
  const [applicationsDesktop, setApplicationsDesktop] = useState([]);

  useEffect(() => {
    fetch(API + "/DESKTOP")
      .then(res => res.json())
      .then(data => setApplicationsDesktop(data.content))
      // .then(data => console.log(data.content))
      .catch(() => setApplicationsDesktop(null))
  }, [])

  return (
    <Slider>
      {{
        "spanish": {
            "title": "Aplicaciones de escritorio"
        },
        "english": {
            "title": "Applications desktop"
        },
        "data": applicationsDesktop
      }}
    </Slider>
  )
}

const ApplicationMobile = () => {
  const [applicationsMobile, setApplicationsMobile] = useState([]);

  useEffect(() => {
    fetch(API + "/MOBILE")
      .then(res => res.json())
      .then(data => setApplicationsMobile(data.content))
      .catch(() => setApplicationsMobile[null])
  }, [])

  return (
    <Slider>
      {{
        "spanish": {
            "title": "Aplicaciones mobiles"
        },
        "english": {
            "title": "Applications mobile"
        },
        "data": applicationsMobile
    }}
    </Slider>
  )
}

const ApplicationWeb = () => {
  const [applicationsWeb, setApplicationsWeb] = useState([]);

  useEffect(() => {
    fetch(API + "/WEB")
      .then(res => res.json())
      .then(data => setApplicationsWeb(data.content))
      .catch(() => setApplicationsWeb(null))
  }, [])

  return (
    <Slider>
      {{
        "spanish": {
            "title": "Aplicaciones web"
        },
        "english": {
            "title": "Applications web"
        },
        "data": applicationsWeb
      }}
    </Slider>
  )
}

export { ApplicationDesktop, ApplicationMobile, ApplicationWeb }
import React, { useContext, useState } from 'react'
import LenguajeContext from '../../context/LanguageContext'
import { TiInfoLarge } from 'react-icons/ti';
import { IoIosSchool } from 'react-icons/io';
import { SiPolymerproject} from 'react-icons/si';
import { BiMessageDots } from 'react-icons/bi';
import { TfiMenuAlt } from 'react-icons/tfi';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { FaFileDownload } from 'react-icons/fa'
import { MdDocumentScanner } from 'react-icons/md'
import { LanguagePhone } from '../molecules/Language';
import '../../styles/components/organisms.css'

let menu, setMenu

const downloadCV = () => {
  // using Java Script method to get PDF file
  fetch('CV.pdf').then(response => {
    response.blob()
      .then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Carlos Alidio Medina Lopez.pdf';
        alink.click();
      })
  })
}

const Menu = () => {
  const { isSpanish } = useContext(LenguajeContext)

  return (
    <div className={menu ? 'menu__container--phone' : 'menu__container'} >
      <a href="/">
        <AiFillHome className='icon'/>
        {isSpanish ? "Inicio" : "Home"}
      </a>

      <a href="/projects">
        <SiPolymerproject className='icon'/>
        {isSpanish ? "Proyectos" : "Projects"}
      </a>

      <a href='/aboutme'>
        <TiInfoLarge className='icon'/>
        {isSpanish ? "Sobre mi" : "About me"}
      </a>

      <a href='education'>
        <IoIosSchool className='icon'/>
        {isSpanish ? "Educación" : "Education"}
      </a>

      <a href='contactme'>
        <BiMessageDots className='icon'/>
        {isSpanish ? "Contactarme" : "Contact me"}
      </a>

      {/* <a onClick={() => downloadCV()}>
        <FaFileDownload className='icon' />
        CV
      </a> */}

      <a href='cv'>
        <MdDocumentScanner className='icon' />
        CV
      </a>
    </div>
  )
}

const MenuPhone = () => {
  [menu, setMenu] = useState(false);

  return (
    <>
      <TfiMenuAlt className={menu ? 'none' : 'icon-menu'} onClick={() => setMenu(true)} />
      <section className={menu ? 'menu-phone__container' : 'none'}>
        <AiOutlineClose className='icon-menu' onClick={() => setMenu(false)} />
        <Menu />
        <LanguagePhone />
      </section>
    </>
  )
}

const MenuAside = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverProjects, setHoverProjects] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverEducation, setHoverEducation] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverCv, setHoverCv] = useState(false);
  return (
    <div className='menu-aside__container'>
      <a href='/' onMouseOver={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)}>
        {hoverHome ? <p className='text-icon'>Home</p> : <AiFillHome className='icon' />}
      </a>

      <a href='/projects' onMouseOver={() => setHoverProjects(true)} onMouseLeave={() => setHoverProjects(false)}>
        {hoverProjects ? <p className='text-icon'>Projects</p> : <SiPolymerproject className='icon'/>}
      </a>

      <a href='/aboutme' onMouseOver={() => setHoverAbout(true)} onMouseLeave={() => setHoverAbout(false)}>
        {hoverAbout ? <p className='text-icon'>About</p> : <TiInfoLarge className='icon'/>}
      </a>

      <a href='/education' onMouseOver={() => setHoverEducation(true)} onMouseLeave={() => setHoverEducation(false)}>
        {hoverEducation ? <p className='text-icon'>Education</p> : <IoIosSchool className='icon'/>}
      </a>

      <a href='/contactme' onMouseOver={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)}>
        {hoverContact ? <p className='text-icon'>Contact</p> : <BiMessageDots className='icon'/>}
      </a>

      {/* <a onClick={() => downloadCV()}>
        <FaFileDownload className='icon' />
      </a> */}

      <a href='cv' onMouseOver={() => setHoverCv(true)} onMouseLeave={() => setHoverCv(false)}>
        {hoverCv ? <p className='text-icon'>CV</p> : <MdDocumentScanner className='icon' />}
      </a>
    </div>
  )
}

export { Menu, MenuPhone, MenuAside }
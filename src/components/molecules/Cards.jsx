import React, { useContext, useEffect, useState } from 'react'
import LenguajeContext from '../../context/LenguajeContext';
import { FaCode } from 'react-icons/fa';

import '../../styles/components/molecules/Cards.css'


export const CardProject = (props) => {
  const { isSpanish } = useContext(LenguajeContext);
  const { link, thumbnails, english, spanish } = props.children;

  return (
    <article className="card__project">
      <a className='card__project--link' href={link}>
        <img src={thumbnails.medium.url} className={"card__project--image"} />
        <h3 className="card__project--title">{isSpanish ? spanish.title : english.title}</h3>
        <p className="card__project--description">{isSpanish ? spanish.description : english.description}</p>
      </a>

      <a className="card__project--code" href={props.children['link-code']}>
        <FaCode /> {isSpanish ? "Código" : "Code"}
      </a>
    </article>
  )
}


export const CardVideo = (props) => {
  const { isSpanish } = useContext(LenguajeContext);
  const { descripcion, description, link, title, titulo, thumbnails, type } = props.children;

  return (
    <article className="card__video">
      <a className='card__video--link' href={link}>
        <div>
          <img src={thumbnails.medium.url} className={'card__video--image'} />
          <p className="card__video--description">{isSpanish ? descripcion : description}</p>
        </div>
        
        <p className="card__video--title">{title}</p>
      </a>
    </article>
  )
}
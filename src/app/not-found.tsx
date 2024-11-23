'use client'

import React, { useEffect } from 'react'
import '@/styles/pages/NotFound.css'
import Link from 'next/link';

const NotFound: React.FC = () => {  
  useEffect(() => {
    document.title = "Not Found"
  }, [])

  return (
    <section className='not-found'>
      <img className='not-found__image' src="https://i.imgur.com/GMDwQGM.png" alt="Bot not found" />

      <div className='not-found__description'>
        <h1 className='not-found__title'>{"<404/>"}</h1>

        <div className='not-found__p'>
          <p className='not-found__sign'>{"<"}</p>
          <p className='not-found__tag'>p</p>
          <p className='not-found__sign'>{">"}</p>
        </div>

        <p className='not-found__text'>Page not found!!</p>

        <div className='not-found__p'>
          <p className='not-found__sign'>{"</"}</p>
          <p className='not-found__tag'>p</p>
          <p className='not-found__sign'>{">"}</p>
        </div>

        <p className='not-found__text'></p>

        <div className='not-found__p'>
          <p className='not-found__sign'>{"<"}</p>
          <p className='not-found__tag'>a</p>
          <p className='not-found__ref'>href</p>
          <p>=</p>
          <p className='not-found__tag'>{"{"}</p>
          <Link className='not-found__link' href='/'>/</Link>
          <p className='not-found__tag'>{"}"}</p>
          <p className='not-found__sign'>{">"}</p>
        </div>

        <p className='not-found__text'>
          <Link className='not-found__link' href="/">Return to home</Link>
        </p>
        
        <div className='not-found__p'>
          <p className='not-found__sign'>{"</"}</p>
          <p className='not-found__tag'>a</p>
          <p className='not-found__sign'>{">"}</p>
        </div>
      </div>
    </section>
  )
}

export default NotFound

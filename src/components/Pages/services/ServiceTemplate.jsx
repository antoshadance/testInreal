import React, { useEffect } from 'react';
import Navbar from '../../Navbar';
import Contact from '../../Contacts';
import "../../styles/Service.css";

export default function ServiceTemplate(props) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Navbar/>
        <div className='servicePage'>
            <section className='serviceDesc'>
              <h1 className='serviceTitle'>{props.title}</h1>
              <article className='description' dangerouslySetInnerHTML={{__html:props.article}}>
              </article>
            </section>
        </div>
        <Contact/>
    </div>
  )
}

import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Contact from '../Contacts';
import "../styles/AboutPage.css"

export default function AboutPage() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return(
        <div>
            <Navbar/>
                <article className='aboutPage aboutPage-content'>
                    <h1>О компании</h1>
                    <p>Мы — аккредитованная IT-компания, занимающаяся разработкой, 
                        внедрением и сопровождением программного обеспечения: мобильные 
                        приложения, сервисы для 1С, автоматизация бизнес-процессов клиентов.
                         Основная цель — клиентоориентированность и индивидуальный подход к 
                         каждой задаче клиента.</p>
                </article>
            <Contact/>
        </div>
    )
}
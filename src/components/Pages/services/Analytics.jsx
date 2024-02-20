import React, { useEffect } from 'react';
import Navbar from '../../Navbar';
import Contact from '../../Contacts';
import { Link } from 'react-router-dom';
import "../../styles/PageNotReady.css"

export default function Analytics() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div>
            <Navbar/>
            <div className='notReady-page'>
                <div className='notReady-page-content'>
                    <p>Раздел еще не готов. <br/>Он будет заполнен позже</p>
                    <Link to="/">Вернуться на главную страницу</Link>
                </div>
            </div>
            <Contact/>
        </div>
    )
}
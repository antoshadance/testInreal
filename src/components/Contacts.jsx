import React from 'react';
import "./styles/Contacts.css";
import { Link } from 'react-router-dom';


export default function Contact () {
    return (<div className='contactsPageMain'>
        <div className='contactsPage'>
        <div className='aContact'>
            <h4><Link to={"/"}>INREAL — ANOTHER REALITY</Link></h4>
            <p>Бесконечность — не предел</p>
        </div>
        <div className='aContact'>
            <h4>Мы находимся</h4>
            <p>г. Красноярск ул. Маерчака 3, <br/>офис 501</p>
        </div>
        <div className='aContact'>
            <h4>Наши контакты</h4>
            <p>Телефон — 8-933-333-02-23</p>
            <p>Электронная почта — inreal24@yandex.ru</p>
        </div>
        <div className='aContact'>
            <h4>Режим работы</h4>
            <p>Пн.-Пт. с 08-00 до 17-00</p>
        </div>
        <div className='aContact'>
            <h4>Общество с ограниченной ответственностью "Инреал"</h4>
            <p>ИНН 2463121905</p>
            <p>КПП 246301001</p>
        </div>
        </div>
    </div>)
}
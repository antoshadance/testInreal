import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css"
import "./styles/Modal.css"

export default function Navbar () {

    const [modalDisplay, setModalDisplay] = useState(false)

    function handleOuterClick() {
       setModalDisplay(false)
    }

    function handleOpenModal() {
        window.scrollTo(0,0)
        setModalDisplay(true);
    }

    function handleSubmit() {
        console.log("Form submitted")
    }

    return (
        <nav className='navBlock'>
            <input type='checkbox' id='check' onClick={()=>{window.scrollTo(0,0)}}></input>
            <label for="check" className="checkbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </label>
            <label class="logo"><Link to={"/"}k>INREAL — ANOTHER REALITY</Link></label>
            <ul>
                <li>
                    <Link to={"/products"} onClick={()=>{handleOuterClick()}}>Наши продукты</Link>
                </li>
                <li>
                    <Link to={"/about"} onClick={()=>{handleOuterClick()}}>О нас</Link>
                </li>
                <li>
                    <Link onClick={handleOpenModal}>Обратная связь</Link>
                </li>
            </ul>
            <div className='modal' id="modalOut" onClick={handleOuterClick} style={modalDisplay?{display:"block"}:{display: "none"}}>
                <div className='modal-content' onClick={(e)=>{e.stopPropagation()}}>
                    <form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
                        <input type="text" placeholder='Ваше имя' className="modal-input"></input>
                        <br></br>
                        <input type="text" placeholder='Телефон для обратной связи' className="modal-input"></input>
                        <br></br>
                        <textarea placeholder='В чем состоит ваша задача? (минимум 100 символов)' className='modal-input' cols="22" rows="6"></textarea>
                        <br></br>
                        <button type="submit" className='modal-button'>Отправить</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
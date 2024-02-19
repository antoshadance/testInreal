import React from 'react';
import "./styles/About.css"

function About() {
    return (
        <div className='aboutPage'>
            <article className='section'>
            <h2>О компании</h2>
            <p>Мы — аккредитованная IT-компания, занимающаяся разработкой, внедрением и сопровождением программного обеспечения: мобильные приложения, сервисы для 1С, автоматизация бизнес-процессов клиентов. Основная цель — клиентоориентированность и индивидуальный подход к каждой задаче клиента.</p>
            </article>
            <br></br>
            <h2>Услуги</h2>
            <div className='services'>
                <div className='service'>
                    <h3>Разработка:</h3>
                    <br></br>
                    <p>Мобильные приложения</p>
                    <br></br>
                    <p>Сервисы 1С</p>
                    <br></br>
                    <p>Модули для 1С</p>
                </div>
                <div className='service'>
                    <h3>Автоматизация складских процессов:</h3>
                    <br></br>
                    <p>Проведение аудита</p>
                    <br></br>
                    <p>Написание технического задания</p>
                    <br></br>
                    <p>Внедрение новых процессов</p>
                </div>
                <div className='service'>
                    <h3>Сопровождение готовых или новых программных продуктов 1С</h3>
                </div>
            </div>
        </div>
    );
}

export default About;
import svgs from "../../../svgs";
let {flagSvg,flagFillSvg} = svgs(24);
let {numberOneSvg, numberTwoSvg} = svgs(32)

const jsContent = {
    title: "JavaScript разработка",
    article: `  <section>
                    Веб-приложение — это программа, которая загружается через браузер с помощью интернет-соединения.
                    Для пользователя это выглядит как обычный сайт, но на самом деле это система со сложной логикой.
                    <br/>
                    <br/>
                    Главное отличие приложения от сайта — интерактивность. На сайте нельзя выкладывать свой контент, оформлять заказ или покупать авиабилет
                     — для всех этих функций необходима разработка web-приложений.
                    <br/>
                    <br/>
                    Такое решение идеально подходит для создания социальных сетей, игр, онлайн-магазинов, образовательных платформ и многих других продуктов.
                </section>
                
                <section>
                <span>
                <h2>Преимущества</h2>
                Главное преимущество веб-приложения – это выгодно. Такой продукт сможет выполнять множество функций по сравнению с обычным сайтом, а его создание
                будет намного оперативнее и бюджетнее, чем мобильное приложение.
                </span>
                <ul>
                <h2>Другие преимущества</h2>
                <li>${flagFillSvg} стабильная работа на высоких скоростях;</li>
                <li>${flagFillSvg} не требует установки на устройство;</li>
                <li>${flagFillSvg} можно использовать как на ПК, так и на планшетах и смартфонах;</li>
                <li>${flagFillSvg} продукт легко масштабировать, обновлять и дополнять новыми функциями;</li>
                <li>${flagFillSvg} автоматическое обновление без участия пользователя.</li>
                </ul>
                </section>

                <section>
                <span>
                <ul>
                    <h2>Мы разрабатываем веб-приложения с
                    использованием современных технологий: <span class="emphasize">React</span> и <span class="emphasize">NodeJS</span></h2>
                    <br/>
                    <h2>Виды веб-приложений:</h2>

                    <li class="bigLi">${numberOneSvg} <span class="emphasize">Single Page Application (SPA)</span>
                        <li class="liRighter">
                        
                        
                        Одностраничные приложения   
                        
                        </li>

                        
                        <li>
                        <h3>Что это такое?</h3>
                        <span>
                        При первой загрузке формируется одна страница, при переходе на вложенные ссылки 
                        данные подгружаются в эту страницу динамически.
                        </span>
                        </li>

                        <li>
                        <h3>Преимущества:</h3>
                        <span>
                        <ul>
                        <li>
                        ${flagFillSvg}скорость;
                        </li>
                        <li>
                        ${flagFillSvg}гибкость;
                        </li>
                        <li>
                        ${flagFillSvg}мультиплатформенность.
                        </li>
                        </ul>
                        </span>
                        </li>

                        <li>
                        <h3>Когда использовать?</h3>
                        <span>
                        SPA отлично подходят в ситуации, когда нужен сложный дизайн с большим количеством анимации, высокая скорость и отклик,
                        а также динамическая загрузка данных для пользователей.
                        </span>
                        </li>
                    </li>

                    <br/>

                    <li class="bigLi">${numberTwoSvg} <span class="emphasize">Multi Page Application (SPA)</span>
                        <li class="liRighter">
                        
                        
                        Многостраничные приложения   
                        
                        </li>

                        
                        <li>
                        <h3>Что это такое?</h3>
                        <span>
                        При первой загрузке формируется первая страница, 
                        при переходе по ссылкам страница обновляется и загружается новая
                        </span>
                        </li>

                        <li>
                        <h3>Преимущества:</h3>
                        <span>
                        <ul>
                        <li>
                        ${flagFillSvg}Простая поисковая оптимизация;
                        </li>
                        </ul>
                        </span>
                        </li>

                        <li>
                        <h3>Когда использовать?</h3>
                        <span>
                        Необходимо приложение с большим количеством статичной
                        информации для пользователей, для приложения важно SEO
                        </span>
                        </li>
                    </li>

                    
                    
                </ul>
                </span>
                </section>
                `
}

export default jsContent
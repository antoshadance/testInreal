import svgs from "../../../svgs";
// let {flagFillSvg, numberOneSvg,numberTwoSvg,numberThreeSvg,numberFourSvg} = svgs;
let {flagFillSvg,numberOneSvg,numberTwoSvg,numberThreeSvg,numberFourSvg} = svgs(22);

const webAppContent = {
    title: "Разработка мобильных приложений",
    article: `  <section>
                    Разработка приложений для портативных устройств, таких,
                    как КПК, смартфоны или сотовые телефоны. 
                    <br/>
                    <br/>
                    Процесс создания и выпуска мобильных приложений часто 
                    понимается как серия шагов или этапов. На этих этапах процесса разработки мобильного приложения 
                    задействовано множество разных людей и специалистов внутри организации, включая бизнес, маркетинг, 
                    дизайн и инженерию. 
                </section>
                
                <section>
                <span>
                    <ul><h2>Этапы разработки мобильных приложений:</h2>
                        <li>${flagFillSvg} стратегия;</li>
                        <li>${flagFillSvg} планирование;</li>
                        <li>${flagFillSvg} проектирование;</li>
                        <li>${flagFillSvg} разработка;</li>
                        <li>${flagFillSvg} тестирование</li>
                        <li>${flagFillSvg} выпуск.</li>
                    </ul>
                </span>
                </section>

                <section>
                <span>
                    <ul><h2>Какие задачи решает мобильное приложение?</h2>
                    <li>${numberOneSvg} Повышение лояльности существующей клиентской базы.</li>
                    <li>${numberTwoSvg} Предоставление уникального сервиса.</li>
                    <li>${numberThreeSvg} Привлечение новых клиентов.</li>
                    <li>${numberFourSvg} Оптимизация и автоматизация бизнес-процессов.</li>
                    </ul>
                </span>
                </section>
                `
}
export default webAppContent;
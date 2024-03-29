import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Contacts from "../Contacts";
import "../styles/Products.css";
import svgs from "../svgs"
let flagFillSvg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>;
let flagSvg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
<path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>

export default function Products() {

    return(
        <div>
            <Navbar/>
            <div className="productsPage">
                <div className="product">
                    <section className="productDesc">
                        <h1 className="productTitle">Модуль 1C ЕИС</h1>
                        <h1 className="slogan">Универсальное решение в сфере закупок</h1>
                        <h2 className="brief">Модуль ЕИС является отдельной конфигурацией, 
                            задача которой — оптимизация и упрощение подготовки и проведения 
                            закупочного процесса.</h2>
                        <h3>О продукте</h3>
                        <span>
                            Программа разработана в соответствии с требованиями Бюджетного кодекса Российской
                            Федерации, а также следующих федеральных законов:

                            <ul>
                                <li>{flagFillSvg}   Федеральный закон от 05.04.2013 N 44-ФЗ «О контрактной системе в сфере заку
                                        пок товаров, работ, услуг для обеспечения государственных и муниципальных нужд»;</li>
                                <li>{flagFillSvg}   Федеральный закон от 18.07.2011 N 223-ФЗ «О закупках товаров, работ, услуг отдельными видами юридических лиц».</li>
                            </ul>

                        </span>

                                            
                                    <ul>
                                    <h4>Программа предназначена для применения в:</h4>  
                                    <li>
                                        {flagFillSvg} Государственных и муниципальных учреждениях разного уровня, заку-почная деятельность которых регламентируется Федеральным законом № 44-ФЗ:

                                        <ul className="subUl">
                                            <li className="subLi">{flagSvg} главные распорядители, распорядители и получатели бюджетных средств, выступающие в роли государственных (муниципальных) за-казчиков;</li>
                                            
                                            <li className="subLi">{flagSvg} органы государственной и муниципальной власти, уполномоченные органы, осуществляющие функции по планированию и проведению закупок;</li>

                                            <li className="subLi">{flagSvg} специализированные организации – юридические лица, которые при-влекаются заказчиками или уполномоченными органами для осу-ществления функций по определению поставщиков (исполнителей, подрядчиков).</li>
                                        </ul>

                                    </li>

                                    <li>{flagFillSvg} Организациях и учреждениях, закупочная деятельность которых регу-лируется Федеральным законом № 223-ФЗ:
                                        <ul className="subUl">
                                            <li className="subLi">{flagSvg} государственные и муниципальные унитарные предприятия;</li>
                                            
                                            <li className="subLi">{flagSvg} автономные учреждения;</li>
                                            
                                            <li className="subLi">{flagSvg} государственные корпорации и др.</li>
                                        </ul>
                                    </li>
                                    </ul>

                                    <ul>
                                    <h4>Возможности Модуля 1С ЕИС:</h4>
                                    
                                        <li>{flagFillSvg} загрузка контрактов;</li>
                                        
                                        <li>{flagFillSvg} выгрузка исполнения контрактов.</li>
                                    </ul>

                                    <ul>
                                    <h4>В программе реализовано:</h4>
                                    
                                        <li>{flagFillSvg} онлайн-обмен данными;</li>
                                        
                                        <li>{flagFillSvg} формирование отчетов;</li>
                                        
                                        <li>{flagFillSvg} подписание документов;</li>
                                        
                                        <li>{flagFillSvg} автоматическое и ручное заполнение данных.</li>
                                    </ul>

                            <h4>Минимальные системные требования для компьютера конечного пользователя: </h4>
                            <table>
                                <tbody>
                                <tr>
                                    <td rowspan="3" width="15%">
                                        Процессор
                                    </td>
                                    <td>
                                        Intel Celeron с тактовой частотой 2 700 МГц и выше
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        AMD
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Эльбрус-8С
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ОЗУ
                                    </td>
                                    <td>
                                        4 Гб и более
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Накопитель
                                    </td>
                                    <td>
                                        Жесткий диск или твердотельный накопитель. При установке используется от 120 Гб
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Порты
                                    </td>
                                    <td>
                                        USB-порт
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Монитор
                                    </td>
                                    <td>
                                        Разрешение 1280×768 точек и более высокое
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <br/>
                            <h4>Реализация и поддержка</h4>
                            <br/>
                            <span>
                            На реализацию проекта уходит один месяц, по прошествии которого на вашем предприятии будет установлена 
                            полностью готовая к практическому использованию система
                            и обученные работе с ней пользователи. 
                            <br/>В качестве следующего шага после внедрения "Модуль 1С ЕИС" мы рекомендуем воспользоваться нашими
                            услугами технического обслуживания. Это необходимо  так как со временем
                            вы станете более опытным пользователем программы и захотите оптимизировать ее возможности,
                            осуществить доработки и расширить функционал. Также сотрудники предприятий периодически нуждаются
                            в консультациях по тонкостям работы
                            с программой.
                            </span>
                    </section>
                </div>
            </div>
            <Contacts/>
        </div>
    )

}
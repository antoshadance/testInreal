import React from 'react';
import pageContent from "./Models/webApp.js";
import ServiceTemplate from './ServiceTemplate.jsx';
let {title,article} = pageContent;



export default function WebApp() {
    return(
        <ServiceTemplate title={title} article={article} />
    )
}
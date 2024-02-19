import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import pageContent from './Models/businessProcess';
let {title,article} = pageContent;


export default function BusinessProcess() {
    return(
        <ServiceTemplate title={title} article={article} />
    )
}
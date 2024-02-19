import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import pageContent from "../services/Models/javaScript"

export default function JavaScriptDev() {
    return(
        <ServiceTemplate title={pageContent.title} article={pageContent.article}></ServiceTemplate>
    )
}
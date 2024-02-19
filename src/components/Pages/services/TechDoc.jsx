import React from 'react';
import "../../styles/Service.css";
import pageContent from "./Models/techDoc.js";
import ServiceTemplate from './ServiceTemplate';
let {title,article} = pageContent

export default function TechDoc() {

  return (
    <ServiceTemplate title={title} article={article} />
  )
}

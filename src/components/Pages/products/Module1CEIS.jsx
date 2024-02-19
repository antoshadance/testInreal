import ProductTemplate from "./ProductTemplate.jsx";
import React from 'react';
import pageContent from "./Models/Module1CEIS.js"
let {title,slogan,article} = pageContent;

export default function Module1CEIS() {
  return (
    <ProductTemplate  productTitle={title} slogan={slogan} article={article} />
  )
}

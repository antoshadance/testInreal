import React, {useEffect} from 'react';
import "../../styles/Products.css";
import Navbar from '../../Navbar';
import Contact from '../../Contacts';

export default function Product(props) {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
    <Navbar/>
      <div className='productsPage'>
        <div className='product'>
          <section className='productDesc'>
              <h1 className='productTitle'>{props.productTitle}</h1>
              <span className='slogan'>{props.slogan}</span>
                <article className='description' dangerouslySetInnerHTML={{__html:props.article}}>
                </article>
          </section>
        </div>
      </div>
      <Contact/>
    </div>
  )
}

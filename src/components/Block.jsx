import React from 'react';
import "./styles/Blocks.css"
import { Link} from 'react-router-dom';

export default function Block(props) {
    return (<Link to={props.toPage} className='blocks-link'>
    <div className="block" style={{backgroundImage:`url(${props.img})`}}>
        <div className='textroom'><h2>{props.title}</h2></div>
    </div></Link>)
}
import React from "react";
import './cardStyle.css';
import CardContainer from './CardContainer';


function Card(prof)
{
    return(
    <div className="card-container">
        <div className="card-image">
            <img src={prof.imgSrc}/>
        </div>
        <div className="card-content">
            <span>{prof.title}</span>
            <h4> {prof.sname} </h4>
        </div>
        <div className="card-btn">
            <a href={prof.link}>Watch Now</a>
        </div>
    </div>
    );
}

export default Card;
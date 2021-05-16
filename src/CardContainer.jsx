import React from 'react'
import './CardContainer.css';
import Card from './Card';
import CardData from './CardData';
function CardContainer()
{
    
 return(
     <div>
         <h3>My fevorite Web series</h3>
            <div className="Card-Container">
                <Card
                imgSrc={CardData[0].imgSrc}
                title={CardData[0].title}
                sname={CardData[0].sname}
                link={CardData[0].link}
                />
                <Card
                imgSrc={CardData[1].imgSrc}
                title={CardData[1].title}
                sname={CardData[1].sname}
                link={CardData[1].link}/>
                <Card
                imgSrc={CardData[2].imgSrc}
                title={CardData[2].title}
                sname={CardData[2].sname}
                link={CardData[2].link}/>
                <Card
                imgSrc={CardData[3].imgSrc}
                title={CardData[3].title}
                sname={CardData[3].sname}
                link={CardData[3].link}/>
            </div>
     </div>
 );   
}
export default CardContainer;
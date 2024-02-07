import React from 'react';

import './r.css'
export default function Caindo(props){
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return(
        <div className="folhas">
            {props.img.map((item, key) => (
                <div key={key} style={{backgroundImage:"url("+item+")", 
                aspectRatio:1/1,height:numeroAleatorio(10, 30) +"px", 
                animationDelay:numeroAleatorio(0, 20)+"s",
                transform:"rotateZ("+numeroAleatorio(10, 180)+"deg) rotateY("+numeroAleatorio(-100, 180)+"deg)"    
            }}></div>
            ))}
        </div>
    )
}
import React from 'react';

import './r.css'
export default function Caindo(props){
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return(
        <div className="folhas">
            {props.img.map((item, key) => (
                <img key={key} src={item} style={{
                width:"auto",height:numeroAleatorio(15, 30) +"px", 
                animationDelay:numeroAleatorio(0, 5)+"s",
                "--i":2*key,
                transform:"rotateZ("+numeroAleatorio(320, 180)+"deg) rotateY("+numeroAleatorio(10, 180)+"deg)"    
            }}></img>
            ))}
        </div>
    )
}
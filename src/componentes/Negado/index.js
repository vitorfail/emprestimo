import React from 'react';
import Re from "./reprovado.png"

import './index.css'
export default function Negado(props){
    return(
        <div style={{display:props.show, width:props.largura+"px",height:props.largura+"px"}}  className="negado">
            <div className='chuva'>
                <i style={{"--i":15}}>x</i>
                <i style={{"--i":11}}>x</i>
                <i style={{"--i":13}}>x</i>
                <i style={{"--i":17}}>x</i>
                <i style={{"--i":10}}>x</i>
                <i style={{"--i":12}}>x</i>
                <i style={{"--i":7}}>x</i>
                <i style={{"--i":8}}>x</i>
                <img src={Re}></img>

            </div>
        </div>
    )
}
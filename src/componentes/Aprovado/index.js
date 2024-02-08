import React from 'react';
import Re from "./aprovado.png"

import './index.css'
export default function Aprovado(props){
    return(
        <div style={{display:props.show, width:props.largura+"px",height:props.largura+"px"}}  className="negado">
            <div className='chuva'>
                <i style={{"--i":15}}>$</i>
                <i style={{"--i":11}}>$</i>
                <i style={{"--i":13}}>$</i>
                <i style={{"--i":17}}>$</i>
                <i style={{"--i":10}}>$</i>
                <i style={{"--i":12}}>$</i>
                <i style={{"--i":7}}>$</i>
                <i style={{"--i":8}}>$</i>
                <img src={Re}></img>

            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import Re from "./reprovado.png"

import './index.css'
export default function Negado(props){
    const [inicio, setinicio] = useState(true)
    useEffect(() => {
        setTimeout(()=> {
            setinicio(false)
        },4000)
    })
    return(
        <div style={{display:props.show, width:props.largura+"px",height:props.largura+"px"}}  className="negado">
            <div className='chuva'>
                <div className={inicio?"lista show":"lista"} >
                    <i style={{"--i":15}}>x</i>
                    <i style={{"--i":11}}>!</i>
                    <i style={{"--i":13}}>x</i>
                    <i style={{"--i":17}}>x</i>
                    <i style={{"--i":10}}>!</i>
                    <i style={{"--i":12}}>?</i>
                    <i style={{"--i":7}}>x</i>
                    <i style={{"--i":8}}>!</i>
                </div>
                <img src={Re}></img>

            </div>
        </div>
    )
}
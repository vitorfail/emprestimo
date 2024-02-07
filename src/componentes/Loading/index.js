import React from 'react';

import './index.css'
export default function Loading(props){
    return(
        <div style={{width:props.largura+"px",height:props.largura+"px"}}  className="loading">
            <div style={{width:props.largura/2+"px",height:(props.largura/2)/1.73190162799+"px"}}  className='load'></div>
            <div  style={{width:props.largura/2+"px",height:(props.largura/2)/1.73190162799+"px"}}  className='load'></div>
            <div  style={{width:props.largura/2+"px",height:(props.largura/2)/1.73190162799+"px"}}  className='load'></div>
            <div style={{"--i":1}} className='bola'></div>
            <div style={{"--i":2}} className='bola'></div>
            <div style={{"--i":3}} className='bola'></div>
            <div style={{"--i":4}} className='bola'></div>
            <div style={{"--i":5}} className='bola'></div>
            <div style={{"--i":6}} className='bola'></div>
            <div className='barras'>
                <div className='bar'>
                    <span></span>
                </div>
                <div className='bar'>
                    <span></span>
                </div>
            </div>


        </div>
    )
}
import React from 'react';

import './index.css'
export default function Loading(props){
    return(
        <div style={{display:props.show, width:props.largura+"px",height:props.largura+"px"}}  className="loading">
            <div className='dedos'>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
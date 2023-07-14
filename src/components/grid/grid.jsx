import React from 'react';
import "./style.css"

function Grid({image,active=false}){
    return(
        <>
            {image && 
                <figure className={`scale-in-center ${active ? 'pulse' : ''}` }>
                    <img src={image}></img>
                </figure>
            }
        </>
    )
}
export {Grid}
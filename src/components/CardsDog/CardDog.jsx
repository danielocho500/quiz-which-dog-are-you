import React from 'react'

import './cardDog.css'

export const CardDog = (props) => {

    const {dogInfo} = props

    const baseURI = window.location.origin + window.location.pathname;

    return (
        <div className="dogCard"> 
            <p className="dogCard__name"> {dogInfo.name} </p>
            <img className="dogCard__img" src={`${baseURI}dogs/${dogInfo.id}.jpg`}/>
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import './Results.css'
import { Bar } from '../Bars/Bar'
import { CardDog } from '../CardsDog/CardDog'



export const Results = (props) => {
    const [porcentages, setPorcentages] = useState([20,0,0,0,0])
    const {dogsInfo} = props

    console.log(dogsInfo)

    useEffect(() => {
        let porcentages_aux = []

        for (const key in dogsInfo.categories) {
            const porcentageCat = Math.floor((dogsInfo.categories[key] * 100)/ 5)
            porcentages_aux.push(porcentageCat);
        }

        setPorcentages(porcentages_aux);

    },[dogsInfo]);

    const {mainDog, othersDogs } = dogsInfo
    const baseURI = window.location.origin + window.location.pathname;
    

    return (
        <div className="container__perso result">
            <h1> If you were a dog, you would be a:  </h1>
            <div className="result__dogName"> <p> {mainDog.name} </p> </div>
            <div className="result__image">
                <img src={`${baseURI}dogs/${mainDog.id}.jpg`} />
            </div>
            <p className="result__text"> {mainDog.description} </p>
            <div className="bars">
                <Bar porcentage={porcentages[0]} leftWord='Lazy' rightWord='Energetic'/>
                <Bar porcentage={porcentages[1]} leftWord='Introvert' rightWord='Extrovert'/>
                <Bar porcentage={porcentages[2]} leftWord='Temparamental' rightWord='Pacific'/>
                <Bar porcentage={porcentages[3]} leftWord='Disobedient' rightWord='Docile'/>
                <Bar porcentage={porcentages[4]} leftWord='Big' rightWord='Little'/>
            </div>
            <h2 className="dogCard__title"> You could be also: </h2>
            <div className="dogs_cards">
                <CardDog dogInfo={othersDogs[0]}/>
                <CardDog dogInfo={othersDogs[1]}/>
                <CardDog dogInfo={othersDogs[2]}/>
            </div>

        </div>
    )
}

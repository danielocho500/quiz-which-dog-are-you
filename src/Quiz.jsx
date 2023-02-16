import React from 'react'
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Question } from './components/Question';
import { Dogs } from './dogs';
import { questions } from './questions';

export const Quiz = (props) => {
    const {setIsFinished, setDogsInfo} = props

    const [isActive, setIsActive] = useState(0)
    const [idFocus, setIdFocus] = useState(0);
    
    const [results, setResults] = useState({
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
    })

    const idFocusModified = useRef(false);

    
    useEffect(() => {
      if(idFocusModified.current){
        try{
          const element = document.getElementById(idFocus)
          element.scrollIntoView({behavior: 'smooth'});
        }
        catch{
          const element = document.getElementById('btn_dog');
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
      else{
        idFocusModified.current = true;
      }
    
    }, [idFocus])
    

    const handleSubmit = (e) => {
      e.preventDefault();

      let isCorrect = true;

      questions.every(quest => {
        try{
          const q = document.querySelector(`input[name="${quest.id}"]:checked`).value;
          return true;
        }
        catch{
          isCorrect = false;
          setIsActive(quest.id)
          setIdFocus(quest.id)
          const element = document.getElementById(quest.id)
          element.scrollIntoView({behavior: 'smooth'});
          return false;
        }  
      })
      if(isCorrect){
        readForm();
      }
    }

    const readForm = () => {

      let categories = {}

      for (const [key, value] of Object.entries(results)) {
        const avrg = getAverage(value)
        categories[key] = avrg / 20;
      }

      getDogo(categories)
    } 

    const getAverage = (value) => {
      let i = 0;
      let sum = 0;
      for (const num of Object.entries(value)){
        sum = sum + parseInt(num[1]);
        i++;
      }

      return ((sum/i) * 100) / 6;
    }

    const getDogo = (cat) => {

      const differences = {}

      Dogs.forEach(dog => {
        let difference = 0;
        Object.keys(dog.carac).forEach(carNumber => {
          
          const caracReal = cat[carNumber]
          const caracDog = dog.carac[carNumber]

          let size = 'm'  
          
          if(parseInt(carNumber) === 4){
          
            if(caracReal > 3.5)
              size = 'c'
            else if (caracReal < 1.5)
              size = 'g'

            if(size !== caracDog){
              difference += 12
            }

            return
          }

          if(caracReal > caracDog)
            difference += caracReal - caracDog
          else if (caracDog > caracReal)
            difference += caracDog - caracReal

        })        

        differences[dog.name] = difference;
      })

      let sortable = [];
      let id = 0
      for (var dog in differences) {
        id++;
        sortable.push([dog, differences[dog], id]);
      }

      const uwu = sortable.sort(function(a, b) {
          return a[1] - b[1];
      });

      setDogsInfo(uwu.slice(0 , 4))
      setIsFinished(true)
    }

    return (
      <div className="App">
        <div className='top'>
          <Header />
        </div>

        <form>
          {questions.map(({ id, title, category, positive }) => (
            <Question key={ id } title={ title } isActive={ (isActive === id) } setIsActive={ setIsActive } id= {id} setIdFocus={setIdFocus} category={category} setResults={setResults} isPositive={positive} />
          ))}

          <div className='container__perso btn_cont'>
            <input type={'submit'} value="Calcular" className='btn_dog' id='btn_dog' onClick={handleSubmit}/>
          </div>

        </form>
        
      </div>
  );
}

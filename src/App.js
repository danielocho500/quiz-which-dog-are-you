import React, { useState } from 'react'
import { Quiz } from './Quiz';
import { Results } from './components/Results/Results';

function App() {

    const [isFinished, setIsFinished] = useState(true);
    const [dogsInfo, setDogsInfo] = useState({
        "mainDog": {
          name: "Chihuahua",
          id: 0,
          carac: {
              0: 2.5,
              1: 0,
              2: 0,
              3: 0,
              4: 'c'
          },
          description: 'The Chihuahua is a small and energetic breed of dog that originated in Mexico. They are known for being extremely loyal and protective of their owners, making them excellent companions. Often described as brave and bold despite their small size, Chihuahuas are valued for their courage and devotion.' 
        },
        "othersDogs": [
            {
              name: "Poodle",
              id: 2,
              carac: {
                  0: 2.5,
                  1: 0,
                  2: 0,
                  3: 5,
                  4: 'c'
              },
              description: `Poodles are a highly intelligent and trainable breed of dog known for their affectionate and playful personalities. They are often described as being energetic and lively, but also very loyal and devoted to their owners. Poodles love to be around people and are known for their outgoing and friendly nature. 
              Despite their reputation for being fancy and prissy due to their distinctive haircuts, Poodles are actually very athletic and have a high energy level. They love to play and need plenty of exercise to keep them happy and healthy. Poodles are also known for their ability to adapt well to different living situations, making them a great choice for families or individuals who live in apartments or have limited space. Overall, Poodles are wonderful companions that bring joy, love, and a lot of personality into their owner's lives`
            },
            {
              name: "Corgi",
              id: 1,
              carac: {
                  0: 0,
                  1: 5,
                  2: 2.5,
                  3: 0,
                  4: 'c'
              } ,
              description: `Corgis are a breed of dog known for their friendly and outgoing personalities. They are often described as being loyal, affectionate, and intelligent. Corgis love to be around people and are very social animals, often seeking attention and affection from their owners. They are known to have a great sense of humor and love to make their owners laugh.`
            },
            {
              name: "Doberman",
              id: 3,
              carac: {
                  0: 5,
                  1: 2.5,
                  2: 0,
                  3: 5,
                  4: 'g'
              } ,
              description: `Dobermans are a breed of dog known for their intelligence, loyalty, and protectiveness. They are often described as being fearless and determined, making them excellent guard dogs and protectors. Dobermans are also very energetic and active, requiring plenty of exercise and mental stimulation to keep them happy and healthy.`
            }
        ],
        "categories": {
          "0": 1.5,
          "1": 2.666666666666667,
          "2": 1.8333333333333335,
          "3": 2.5,
          "4": 4.6
      }
    });

    return (
      <div>
      {
        (!isFinished)
        ? <Quiz setIsFinished={setIsFinished} setDogsInfo={setDogsInfo}/>
        : <Results dogsInfo={dogsInfo}/>
      }
      </div>
    )
}


export default App;

import React, { useState } from 'react'
import { Quiz } from './Quiz';
import { Results } from './Results';

function App() {

    const [isFinished, setIsFinished] = useState(false);
    const [dogsInfo, setDogsInfo] = useState({})

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

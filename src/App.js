import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Question } from './components/Question';
import { questions } from './questions';
import Swal from 'sweetalert2'

function App() {

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
      console.log(results);
    } 

    return (
      <div className="App">
        <div className='top'>
          <Header />
        </div>

        <form>
          {questions.map(({ id, title, category }) => (
            <Question key={ id } title={ title } isActive={ (isActive === id) } setIsActive={ setIsActive } id= {id} setIdFocus={setIdFocus} category={category} setResults={setResults} />
          ))}

          <div className='container__perso btn_cont'>
            <input type={'submit'} value="Calcular" className='btn_dog' id='btn_dog' onClick={handleSubmit}/>
          </div>

        </form>
        
      </div>
  );
}


export default App;

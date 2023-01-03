import '../App.css';
import { Corgi } from './corgi/Corgi';

import relojImage from '../img/reloj.png';
import perroImage from '../img/perro.png';
import neutralImage from '../img/neutral.png';

function Header() {
    return (
        <header className='header container'>
            <div className="titleGrid">
                <h1> Test: ¿Que raza de perro eres? </h1>
                <Corgi/>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={relojImage} alt="imagen de un relojs" className='card_img'/>
                    <p className='card_text'> No te llevará mucho tiempo contestar </p>
                </div>

                <div className="card">
                    <img src={perroImage} alt="perro" className='card_img'/>
                    <p className='card_text'> Respuestas honestas, resultados más precisos </p>
                </div>

                <div className="card">
                    <img src={neutralImage} alt="Carita neutral" className='card_img'/>
                    <p className='card_text'> Evita poner respuestas neutrales </p>
                </div>
            </div>
        </header>
    );
}

export default Header;
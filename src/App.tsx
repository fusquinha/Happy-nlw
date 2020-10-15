import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './styles/global.css';
import './styles/pages/landing.css'
import logoImg from './images/Logo.svg'

function App() {
  return (
    <div id="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="Happy"/>
          
          
              <main>
                <h1>Leve Felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia <br/>de muitas crianças.</p>
              </main>

              <div className="location">
                <strong>Goiânia </strong> 
                <span> Goiás</span>
              </div>
              
              <a href=" " className="enter-app">
                <FiArrowRight size={26} color="rgb(0,0,0,)" />
              </a>
          </div>
    </div>
  );
}

export default App;

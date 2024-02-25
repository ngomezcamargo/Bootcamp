import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">

      <div className='contenedor-principal'>

        <h1>Mis cuentas favoritas de YouTube son:</h1> 

        <Perfil
          nombre='Nate Gentile'
          pais='España'
          imagen='nate'
          cargo='Fundador'
          empresa='Nate Gentile'
          resena='Es un empresario Uruguayo que crea mods de computadores y habla sobre hardware'
          youtube='https://www.youtube.com/@NateGentile7'
          instagram='https://www.instagram.com/nategentile7/?hl=es'
          x='https://twitter.com/nategentile7?lang=es'
        />
        <Perfil
          nombre='Oscar Meza'
          pais='Mexico'
          imagen='oscar'
          cargo='Fundador'
          empresa='La capital'
          resena='Es un empresario y youtuber mexicano que enseña a preparar sus recetas favoritas'
          youtube='https://www.youtube.com/@lacapitalcocina'
          instagram='https://www.instagram.com/oscarmezar/?hl=es'
          x='https://twitter.com/i/flow/login?redirect_after_login=%2FOscarMezaB'
        />
        <Perfil
          nombre='Heinz Wuth'
          pais='Chile'
          imagen='heinz'
          cargo='Fundador'
          empresa='Ciencia y Cocina'
          resena='Heinz Wuth es un chef chileno que explica en su canal de YouTube la ciencia detras de fenómenos ocurridos al cocinar'
          youtube='https://www.youtube.com/@soycienciaycocina'
          instagram='https://www.instagram.com/soycienciaycocina/?hl=es'
          x='https://twitter.com/i/flow/login?redirect_after_login=%2Fimchef7'
        />
      </div>



    </div>
  );
}

export default App;

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
        />
        <Perfil
          nombre='Oscar Meza'
          pais='Mexico'
          imagen='oscar'
          cargo='Fundador'
          empresa='La capital'
          resena='Es un empresario y youtuber mexicano que enseña a preparar sus recetas favoritas'
        />
        <Perfil
          nombre='Heinz Wuth'
          pais='Chile'
          imagen='heinz'
          cargo='Fundador'
          empresa='Ciencia y Cocina'
          resena='Heinz Wuth es un chef chileno que explica en su canal de YouTube la ciencia detras de fenómenos ocurridos al cocinar'
        />
      </div>



    </div>
  );
}

export default App;

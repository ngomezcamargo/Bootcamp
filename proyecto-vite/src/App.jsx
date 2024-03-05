import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [catFact, setCatFact] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');


  useEffect(() => { // Define un efecto que se ejecuta despues de que el componenete se haya renderizado

    const fetchCatFact = async () => {

      try {

        const response = await fetch('https://catfact.ninja.fact');
        const data = await response.json();

        setCatFact(data.fact);

      } catch (error) {

        console.error(error);

      }

    };


    fetchCatFact();

  }, []); //Array vacio, significa que este efecto se ejecutará solamente una vez, cuando el componenete se m



  useEffect(() => {/* Definir otro efecto que se ejecuta cada vez que catFact cambia */

    if (catFact) {

      const generateCatImage = async () => {

        try {

          const firstWord = catFact.split(' ', 3).join(' ');
          const response = await fetch(`https://cataas.com/cat/says/${firstWord}`);

          if (response.ok) {

            const data = await response.blob();
            const imageUrl = URL.createObjectURL(data);
            setCatImageUrl(imageUrl);

          } else {

            console.error('Error fetching cat image: ', response.statusText);

          }
        } catch (error) {

          console.error(error);

        }
      };
      generateCatImage();
    }

  }, [catFact]); // Este efecto se ejecutará cada vez que catFact cambie.


  return (

    <>

      <h1>Random Cat Fact</h1>
      {catFact && <p>{catFact}</p>}
      {catImageUrl && (<img src={catImageUrl} alt="random cat" width={300} heigth={400} />)}
      {catImageUrl && <p>Image generated based on the first word of the fact</p>}
    </>

  )

}

export default App;

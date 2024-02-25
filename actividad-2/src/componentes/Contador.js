import React, { useState } from 'react';

export default function Contador(props) {

    const [numero, setNumero] = useState(0);


    const aumentar = () => {

        setNumero(numero + 1);

    };

    return (
            //
        <div>

            <p>Visitas: {numero} </p>

            <button onClick={aumentar} >

                Visitar {props.lugar}

            </button>

        </div>

    );
}



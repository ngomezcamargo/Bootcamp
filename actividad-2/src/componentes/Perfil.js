import React from 'react';
import estilos from '../estilos/Perfil.css';


function Perfil(props) {

    return (

        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
                src={require('../imagenes/'+props.imagen+'.png')}
                alt='Foto de Nate' />
            <p className='contenedor-texto-perfil'>

                {props.nombre} en {props.pais}

            </p>
            <p className='cargo-perfil'>

                {props.cargo} en {props.empresa}

            </p>
            <p className='resena-perfil'>

                {props.resena}

            </p>
        

        </div>
    )

};


export default Perfil;





import React from "react";

function Button(props) {


    return (

        <div className='bg-white text-black rounded-full px-8 py-8 transition-all hover:bg-black hover:text-white'>
            <button onClick={() => window.open(props.instagram, '_blank')}>Instagram</button>
            <button onClick={() => window.open(props.youtube, '_blank')}> YouTube</button>
            <button onClick={() => window.open(props.twitter, '_blank')}>X</button>
        </div>

    );


}


export default Button
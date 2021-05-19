import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect( () =>{
        getGifs(category, 5)
        .then( gifs => setImages( gifs ))        
    }, [ category ])

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">

                {images.length===0 && <p> no se encontraron resultados </p>}

                { /* para cuando  es un array de objetos podemos pasar como props { ...img} */
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id }
                            /* img={ img }  */
                            { ...img }
                        />
                    ))
                }

            </div>
        </>
    )
}

export default GifGrid
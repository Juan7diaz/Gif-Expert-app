import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import LoadingComponent from './LoadingComponent';


const GifGrid = ({ category, cantGifs }) => {

    //para renombrar la data es data:nombre_Deseado
    const { data:gifs, loading } = useFetchGifs( category , cantGifs );

    
    return (
        <>
            <h3>{ category }</h3>

            {loading &&  <LoadingComponent />}

            <div className="card-grid">

                { /* para cuando  es un array de objetos podemos pasar como props { ...img} */
                    gifs.map( ( img ) => (
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
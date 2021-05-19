import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">

                { /* para cuando  es un array de objetos podemos pasar como props { ...img} */
                    data.map( ( img ) => (
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
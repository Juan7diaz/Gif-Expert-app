import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import LoadingComponent from './LoadingComponent';

const GifGrid = ({ category, cantGifs }) => {

    //para renombrar la data es data:nombre_Deseado
    const { data:images, loading } = useFetchGifs( category , cantGifs );
    return (
        <>
            <h3>{ category }</h3>

            {loading &&  <LoadingComponent />}

            <div className="card-grid">

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
            
            {( images.length === 0 && loading === false  ) && <p>Búsqueda no encontrada 😢</p> }

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
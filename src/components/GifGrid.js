import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    

    const [images, setImages] = useState([])

    useEffect( () =>{
        getGifs();        
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=wonder+egg+priority&api_key=TyArCI2y39RCuFpzJE04D6TEBn6cDJmS'
        const resp = await fetch( url );
        const { data } = await resp.json();

        //como {data}, me trae muchos datos que no quiero utilizar
        //hago un map para almacenar los datos dentro un una const gifs que solo contenga los datos que requiero
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log( gifs );
        setImages( gifs );
    }

    return (
        <>
            <h3>{ category }</h3>
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
        </>
    )
}

export default GifGrid
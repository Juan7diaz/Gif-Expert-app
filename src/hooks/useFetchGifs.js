import { useEffect, useState } from "react"
import getGifs from '../helpers/getGifs'

export const useFetchGifs = ( category, cantGifs ) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    
    useEffect( ()=>{

        getGifs(category, cantGifs)
            .then( gifs => ( setState({
                data: gifs,
                loading: false
            }
        )))

    },[ category ])


    return state; 
}
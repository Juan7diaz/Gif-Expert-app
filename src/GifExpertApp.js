import React, {useState} from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kimetsu no yaiba', 'The promised Neverland', 'Wonder Egg Priority'])

   
    //las dos son formas validas de hacer cambios
    //const handleAdd = () =>{
        //setCategories([ 'HunterXHunter', ...categories])
        //setCategories( cats => [...cats, 'HunterXHunter'])
   // }

    return (
        <div>

            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( (category) => (
                        <li key={ category }>
                            { category}
                        </li>
                    ))
                }
            </ol>

        </div>
    )
}

export default GifExpertApp

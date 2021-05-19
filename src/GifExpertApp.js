import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The promised Neverland'])
    const [cantGifs, setCantGifs ] = useState(5);

    return (
        <div>

            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } setCantGifs={ setCantGifs } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={ category }
                            cantGifs = { cantGifs }
                        />
                    ))
                }
            </ol>

        </div>
    )
}

export default GifExpertApp

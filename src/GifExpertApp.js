import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import NavBar from './components/NavBar'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = ['shingeki no kyojin'] }) => {

    const [categories, setCategories] = useState( defaultCategories )
    const [cantGifs, setCantGifs ] = useState(5);

    return (
        <div>

            <NavBar title={"GifExpertApp"}/>
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

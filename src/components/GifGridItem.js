import React from 'react'

const GifGridItem = ( {title, url} ) => {

    return (

        <div className="card animate__animated animate__backInLeft" >
            <img src={url } alt = { title } />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}

export default GifGridItem

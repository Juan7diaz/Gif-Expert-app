import React from 'react'
import PropTypes from 'prop-types';


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

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired
}

export default GifGridItem

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, setCantGifs }) => {

    //almacena lo estro por el usuario
    const [InputValue, setInputValue] = useState('')

    //obtiene lo el usuario escribió en el input
    const handleInputChange = ( e ) =>{
        setInputValue( e.target.value );
    }
    
    //cuando el usuario presiona el 'Enter'
    const handleSubmit = ( e ) => {
        e.preventDefault(); //hace que el navegador no se recargue cuando hacemos un 'Enter'

        //para que no se garde texto mayor a 2 letras
        if( InputValue.trim().length > 2 ){
            setCategories( cats => [InputValue, ...cats] ); //se utiliza asi ya que no tengo la 'categories' (auqneu tambien la podemos pasar como props)
            setInputValue('');
        }
    }
    
    const handleCantChange = (e) => {
        setCantGifs( e.target.value )
    }

    return (
        <form onSubmit={ handleSubmit } className="form-inline">
            {/* <p>{ InputValue }</p> */}
            <input
                value = { InputValue }
                className="form-control mr-sm-2"
                onChange = { handleInputChange }
                placeholder="Ingrese el gif a buscar"
            />
            <select onChange={ handleCantChange }>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    setCantGifs: PropTypes.func.isRequired
}

export default AddCategory;
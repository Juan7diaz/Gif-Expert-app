import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

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

    return (
        <form onSubmit={ handleSubmit }>
            <input
                onChange = { handleInputChange }
                placeholder="Ingrese la categoria a buscar"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
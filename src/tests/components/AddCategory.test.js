import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory'

describe('Testing en el componente addCategoy.js', () => {

    const setCategories = jest.fn(); //solo una funcion que no hace nada
    const setCantGifs = () => {} //solo es una funcion vacia x2
    let wrapper = shallow(  <AddCategory setCantGifs={setCantGifs} setCategories={setCategories}/> );
    
    beforeEach( ()=>{
        jest.clearAllMocks() //para que si tenemos alguna simulacion de funciones se limpie
        wrapper = shallow(  <AddCategory setCantGifs={setCantGifs} setCategories={setCategories}/> );
    })

    test('debe de mostrar el componente correctamente ', () => {
            
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        //simulamos que la caja de texto cambió
        const value  = 'algun gifs';
        //lo que mande en {} va a tener el valor de 'e'  en const handleInputChange = ( e ) =>{...}
        input.simulate('change', { target: { value } } );
        //expect( wrapper.find('p').text().trim() ).toBe( value ) //en addCategoy.js comenté la linea del parrafo
    })
    
    test('No debe de post la informacion onSumit ', () => {
      
        wrapper.find('form').simulate('submit', { preventDefault(){} } )
        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('debe de llamar setCategory y limpiar la caja de texto ', () => {
        
        //simpula el inputChange
        const value = 'HOLA MUNDO';
        wrapper.find('input').simulate('change', { target: { value } } );
        //expect( wrapper.find('p').text().trim() ).toBe( value )  //en addCategoy.js comenté la linea del parrafo
        
        //simula el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } )
        
        //el setCategory fue llamado por lo menos una vez
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); //que se halla llamado una vez
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); //que setCategories se halla llamado como una funcion

 
        //el valor del inputvalue debe ser ''
        const inputValue = wrapper.find('input').prop('value')
        expect( inputValue ).toBe('');

    })
    


})

import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas con el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial ', async() => {
        
        //renderHook es para poder utilizar los customHooks 
        //para que renderice y ahi colocar nuestro customHook
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs( 'the promised neverland' ) );
        const { data, loading } = result.current; //si hacemos console.log de 'data' se deberia ver un [] y true
        
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    })

    test('debe de retornar un array de imagenes y el loading en falso ', async() => {
       
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs( 'the promised neverland' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current; //si hacemos console.log de 'data' se deberia ver un [] y true

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );

    })
    

})

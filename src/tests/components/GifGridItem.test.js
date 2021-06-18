import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';


describe('Prueba en el componente GifGridItem.js', () => {
    
    const title = 'Un Titulo';
    const url = 'https://localhost/algo.jp'
    const wrapper = shallow( <GifGridItem title={ title }  url={ url }/> );


    test('debe mostrar el componente correctamente ', () => {
        
        //hacemos una Snapshot
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de tener un parrafo con el title', () => {
        
        //vemos que si el titulo si muestre lo esperado que es 'title'
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('debe de obtener la imagen con los valores pasado por props ', () => {
        
        //const img = wrapper.find('img').at(0) // si hay varias imagen
        const img = wrapper.find('img');
        //console.log( img.props().src );

        //dos forma de hacerlo
        expect( img.props().src ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        

    })

    test('debe de tener animate__backInLeft ', () => {

        const toSearch = 'animate__backInLeft';
        const div = wrapper.find('div').at(0);
        const className =  div.prop('className')

        //include es para saber si la plabra se encuentra en parrafo
       expect( className.includes( toSearch ) ).toBe( true );

    })
    
})

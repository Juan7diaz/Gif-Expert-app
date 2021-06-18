import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('pruebas al componente principal', () => {
    

    test('debe de mostrar correctamente GifExpertApp ', () => {
        
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de mostrar una lista de categorias ', () => {
        
        const categories = ['shingeki no kyojin', 'The promised neverland' ];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( 2 );

    })

    

})

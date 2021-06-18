import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); //para falsear la data, simulamos que el hook ya nos devuelve algo

describe('Pruebas del componente GifGrid', () => {

    const category = 'The Promised Neverland';
    
    test('debe mostrar correctamente el componente ', () => {
        
        //puede ser mockReturn(...)
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
    })

    test('should change the snapshot when useFetchGifs is executed', () => {
        
        const data = [{
            id: 'TPN',
            title: 'THE PROMISED NEVERLAND',
            url: 'https://localhost/cualquier/cosa.jpg'
        },
        {
            id: 'WEP',
            title: 'WONDER EGG PRIORITY',
            url: 'https://localhost/cualquier/cosa.jpg'
        }];

        useFetchGifs.mockReturnValue({
            data: data,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
       
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false ) //para cuando el loading no existe 
        expect( wrapper.find('GifGridItem').length ).toBe( data.length )


    });

})

import '@testing-library/jest-dom';
import getGifs from '../../helpers/getGifs'


describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe de traer 5 elementos', async() => {
        
        const gifs = await getGifs('Messi');

        expect( gifs.length ).toBe( 5 );

    })

    test('Debe de traer 5 elementos', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })

})

const getGifs = async(category, cantGifs=5 ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=${cantGifs}&q=${ encodeURI(category) }&api_key=TyArCI2y39RCuFpzJE04D6TEBn6cDJmS`
    const resp = await fetch( url );
    const { data } = await resp.json();

    //como {data}, me trae muchos datos que no quiero utilizar
    //hago un map para almacenar los datos dentro un una const gifs que solo contenga los datos que requiero
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}

export default getGifs;


 export const getGifs =async (category) =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=gfatge4wJpqKe3OHsKFrdbt5zlLr0d5V&q=valorant=${category}&limit=10`
    {/* Después del url vamos a meter la llamada al http */}
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));
    
 
    return gifs;
    
    }




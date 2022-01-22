
export const getGif = async( category ) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=pXhXNyszJChO6dbJGtPTV5IC0iflpxtF&limit=10&q=${encodeURI(category)}`
    const response = await fetch(url);
    const { data } = await response.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
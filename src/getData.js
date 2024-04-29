export default async function getData(key, searchTerm, limit) {


    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}&limit=${limit}`, {
            mode: 'cors'
        });
        
        const bojack = await response.json();
        return bojack;
    } catch {
        throw Error("Invalid API key or inputs");
    }
}
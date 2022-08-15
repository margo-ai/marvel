import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=ab08ac1ac254a5b0e491709088dcd0c9';
    const _baseOffset = 595;
     
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformCharacter = (charPath) => {        
        return {          
            id: charPath.id,
            name: charPath.name,
            description: charPath.description ? `${charPath.description.slice(0, 210)}...` : 'Info about this character is not found',
            thumbnail: charPath.thumbnail.path + '.' + charPath.thumbnail.extension,
            homepage: charPath.urls[0].url,
            wiki: charPath.urls[1].url,
            comics: charPath.comics.items.slice(1, 11)                
        }
    }
    
    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language: comics.textObjects.language || 'en-us',
            price: comics.prices.price ? `${comics.prices.price}` : 'not available'
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics}

}

export default useMarvelService;

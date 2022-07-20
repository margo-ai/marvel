
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=ab08ac1ac254a5b0e491709088dcd0c9';
    _baseOffset = 604;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    // id Spider-Man : 1009610// id Spider-Man : 1009610


    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (charPath) => {        
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

}

export default MarvelService;

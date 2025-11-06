export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;  
        console.log(url); // Adicione esta linha para verificar a URL
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
};

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;  
        console.log(url); // Adicione esta linha para verificar a URL
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
};

export const getPokemonData = async (url) => {
    try {
        console.log(url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return await response.json(); // dados detalhados do pokemon
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
};

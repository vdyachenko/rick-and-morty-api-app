import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

const fetchCharacters = (page) => {
    return axios.get(`${API_URL}/character?page=${page}`);
};

const fetchCharacter = (characterId) => {
    return axios.get(`${API_URL}/character/${characterId}`);
};

const fetchEpisodes = (episodesIds) => {
    return axios.get(`${API_URL}/episode/${episodesIds.join(',')}`);
};


export default {
    fetchCharacters,
    fetchCharacter,
    fetchEpisodes
}
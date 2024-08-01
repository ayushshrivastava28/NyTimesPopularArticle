import axios from 'axios';

const API_KEY = 'QiKA1aOyv9aMDW8AMMYOoXsTkgrk6lOw';
const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed`;

export const fetchMostPopularArticles = async (period: number) => {
    const response = await axios.get(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
    return response.data.results;
};
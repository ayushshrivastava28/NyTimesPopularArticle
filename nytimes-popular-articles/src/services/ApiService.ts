const API_KEY = 'QiKA1aOyv9aMDW8AMMYOoXsTkgrk6lOw';
const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed`;

export const fetchMostPopularArticles = async (period: number) => {
    const response = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
};

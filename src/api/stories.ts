import axios from 'axios';

const BASE_URL: string = 'https://hacker-news.firebaseio.com/v0';

export const getTopStories = () => {
    const url: string = `${BASE_URL}/topstories.json`;

    return getData(url);
};

export const getStoryById = (id: number) => {
    const url: string = `${BASE_URL}/item/${id}.json`;

    return getData(url);
};

export const getData = (url: string) => {
    return axios.get(url);
}

import axios from 'axios';

const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

export const getTopStories = () => {
    return axios.get(URL);
}
import { ref } from 'vue';
import axios from 'axios';

export default function useStories() {
    const topStoriesList = ref([]);

    const getList = async () => {
        try {
            const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');

            topStoriesList.value = parseResponse(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const parseResponse = (response) => {
        const LIST_LENGTH = 10;
        let result = [];

        for( let i = 0; i < LIST_LENGTH; i++ ) {
            result[i] = response[i];
        }

        return result;
    };

    return {
        topStoriesList,
        getList,
    };
}
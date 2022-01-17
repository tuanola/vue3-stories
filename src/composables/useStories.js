import { ref, readonly } from 'vue';
import { getTopStories } from '../api/stories';

const loading = ref(false);

export default function useStories() {
    const topStoriesList = ref([]);

    const getList = async () => {
        try {
            loading.value = true;
            const response = await getTopStories();

            topStoriesList.value = parseResponse(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
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
        topStoriesList: readonly(topStoriesList),
        loading: readonly(loading),
        getList,
    };
}
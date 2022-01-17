import { ref, readonly } from 'vue';
import { getTopStories } from '../api/stories';

const loading = ref(false);

export function useStories() {
    const LIST_LENGTH = 10;
    const topStoriesList = ref([]);

    const getList = async () => {
        try {
            loading.value = true;
            const response = await getTopStories();

            topStoriesList.value = parseResponse(response.data, LIST_LENGTH);
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };

    return {
        topStoriesList: readonly(topStoriesList),
        loading: readonly(loading),
        getList,
    };
}

export const parseResponse = (response, length) => {
    let result = [];

    for( let i = 0; i < length; i++ ) {
        result[i] = response[i];
    }

    return result;
};
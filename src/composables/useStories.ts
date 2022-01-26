import { ref, readonly } from 'vue';
import { getTopStories, getStoryById } from '../api/stories';

const loading = ref(false);

export function useStories() {
    const LIST_LENGTH = 10;
    const topStoriesList = ref([]);

    const getList = async () => {
        try {
            loading.value = true;

            const response = await getTopStories();
            const firstItemsIds = parseResponse(response.data, LIST_LENGTH);

            // @ts-ignore
            topStoriesList.value = await getListDetails(firstItemsIds);
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };

    const getListDetails = async (ids: number[]) => {
        // @ts-ignore
        const result = [];

        for (let i = 0; i < ids.length; i++) {
            const story = await getStory(ids[i]);

            result.push(story);
        }
        // @ts-ignore
        return result;
    };

    const getStory = async (id: number) => {
        const story = ref({});

        try {
            const response = await getStoryById(id);

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        topStoriesList: readonly(topStoriesList),
        loading: readonly(loading),
        getList,
        getStory,
    };
}

export const parseResponse = (response: object, length: number) => {
    const result = [];

    for( let i = 0; i < length; i++ ) {
        // @ts-ignore
        result[i] = response[i];
    }

    return result;
};

import { ref, readonly } from 'vue';
import { getTopStories, getStoryById } from '@/api/stories';
import Story from '@/types/Story';

const DEFAULT_LIST_LENGTH: number = 10;
const loading = ref<Boolean>(false);

export function useStories() {
    let topStoriesList = ref<Story[]>([]);
    let listLength = ref<number>(DEFAULT_LIST_LENGTH);

    const getList = async () => {
        try {
            loading.value = true;

            const response = await getTopStories();
            const firstItemsIds: number[] = parseResponse(response.data, listLength.value);

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
        const story = ref<Story>({
            id: 0,
            title: '',
        });

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
    const result: number[] = [];

    for( let i = 0; i < length; i++ ) {
        // @ts-ignore
        result[i] = response[i];
    }

    return result;
};

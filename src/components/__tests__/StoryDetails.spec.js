import StoryDetails from '../StoryDetails';
import { shallowMount } from '@vue/test-utils';

describe('StoryDetails', () => {
    it('renders story title', () => {
        const title = 'Test Title';
        const wrapper = shallowMount(StoryDetails);

        expect(wrapper.html()).toContain('Test Title');
    });
});

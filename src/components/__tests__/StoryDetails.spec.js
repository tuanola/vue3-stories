import StoryDetails from '../StoryDetails';
import { shallowMount } from '@vue/test-utils';

describe('StoryDetails', () => {
    it('renders story title', () => {
        const propsData = { title: 'Test Title' };
        const wrapper = shallowMount(StoryDetails, { propsData });

        expect(wrapper.html()).toContain('Test Title');
    });
});

import { parseResponse } from '../useStories';

describe('parseResponse', () => {
    it('given length is 3 returns array of first 3 items', () => {
        const GIVEN_LENGTH = 3;
        const objectData = {
            0: '0',
            1: '111',
            2: '222',
            3: '3',
            4: '44',
        };
        const arrayData = [
            '0', '111', '222',
        ];

        expect(parseResponse(objectData, GIVEN_LENGTH)).toEqual(arrayData);
    });
});
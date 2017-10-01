import reducer from '../reducers';
import * as types from '../constants';

describe('App reducers', () => {
    it('changes the language', () => {
        expect(
            reducer([], {
                type: types.CHANGE_LANGUAGE,
                local: 'it',
            }))
            .toEqual({
                local: 'it',
            });
    });
});

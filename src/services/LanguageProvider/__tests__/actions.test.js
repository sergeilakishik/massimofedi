import * as actions from '../actions';
import * as types from '../constants';

describe('App Actions', () => {
    it('should create an action to chnage language', () => {
        const local = 'it';

        const expectedAction = {
            type: types.CHANGE_LANGUAGE,
            local,
        };
        expect(actions.changeLanguage(local)).toEqual(expectedAction);
    });
});

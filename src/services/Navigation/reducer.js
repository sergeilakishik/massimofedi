import { AppNavigator, } from './index';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

const NavReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default NavReducer;

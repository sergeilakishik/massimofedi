const appInitialState = {
    isConnected: true,
};

const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
    case 'CHANGE_CONNECTION_STATUS':
        return {
            ...state,
            isConnected: action.isConnected,
        };
    default:
        return state;
    }
};

export default appReducer;

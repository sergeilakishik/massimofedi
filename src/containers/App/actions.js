import { CHANGE_CONNECTION_STATUS, } from './constants';

export default function (isConnected) {
    return {
        type: CHANGE_CONNECTION_STATUS,
        isConnected,
    };
}

import { Middleware } from '@reduxjs/toolkit';

export const createSocketMiddleware = (
    socket: SocketIOClient.Socket
): Middleware => ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
        action(socket, dispatch, getState);
    } else {
        return next(action);
    }
};

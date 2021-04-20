import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import { createSocketMiddleware } from './middleware/socket-layer-middleware';
import gameReducer from './slices/game';

export const configStore = (socket: SocketIOClient.Socket): Store => {
    const socketMiddleware = createSocketMiddleware(socket);
    const middleware = [socketMiddleware, ...getDefaultMiddleware()];
    return configureStore({
        reducer: {
            game: gameReducer,
        },
        middleware,
    });
};

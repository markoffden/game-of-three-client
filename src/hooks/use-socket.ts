import socket from '../socket';

export const useSocket = (): void => {
    socket.on('game', (msg: unknown) => {
        console.warn('MESSAGE FROM SERVER:', msg);
    });
};

import { createSlice, Slice, Dispatch } from '@reduxjs/toolkit';

export interface TGameState {
    stage: GAME_STAGE;
    players: TPlayer[];
    turns: TTurn[];
}

export enum GAME_STAGE {
    INTRO = 'INTRO',
    IN_PROGRESS = 'IN_PROGRESS',
    SUMMARY = 'SUMMARY',
}

export interface TPlayer {
    id: string;
}

export interface TTurn {
    id: string;
}

export interface TAttempt {
    value: string;
}

const initialState: TGameState = {
    stage: GAME_STAGE.INTRO,
    players: [],
    turns: [],
};

export enum SOCKET_EVENTS_CLIENT {
    NEW_GAME = 'NEW_GAME',
    ATTEMPT = 'ATTEMPT',
}

export enum SOCKET_EVENTS_SERVER {
    GAME_STATUS = 'GAME_STATUS',
}

export interface TGamePayload {
    players: [];
    turns: [];
}

export const gameSlice: Slice<TGameState> = createSlice({
    name: 'game',
    initialState,
    reducers: {
        updateGame: (state, { payload }) => {
            return {
                ...state,
                players: payload.players,
                turns: payload.turns,
            };
        },
    },
});

export const { updateGame } = gameSlice.actions;

export const subscribeToGame = () => (
    socket: SocketIOClient.Socket,
    dispatch: Dispatch
): void => {
    socket.on(SOCKET_EVENTS_SERVER.GAME_STATUS, (game: TGamePayload) => {
        dispatch(updateGame(game));
    });
};

export const emitAttempt = (attempt: TAttempt) => (
    socket: SocketIOClient.Socket
): void => {
    socket.emit(SOCKET_EVENTS_CLIENT.ATTEMPT, attempt);
};

export default gameSlice.reducer;

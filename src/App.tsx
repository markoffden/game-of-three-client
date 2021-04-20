import React, { FunctionComponent, StrictMode } from 'react';
import { Provider } from 'react-redux';
import Game from './containers/Game';
import GlobalStyle from './global-styled';
import socket from './socket';
import { configStore } from './store';

const store = configStore(socket);

const App: FunctionComponent = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <GlobalStyle />
                <Game />
            </Provider>
        </StrictMode>
    );
};

export default App;

import React, { FunctionComponent } from 'react';
import Game from './domains/game/containers/Game';
import GlobalStyle from './global-styled';

const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyle />
            <Game />
        </>
    );
};

export default App;

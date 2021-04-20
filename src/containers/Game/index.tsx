import { useSocket } from '../../hooks/use-socket';
import React, { FunctionComponent } from 'react';
import Intro from '../../components/Intro';
import Playground from '../../components/Playground';
import Results from '../../components/Results';
import { Wrapper } from './styled';

const Game: FunctionComponent = () => {
    useSocket();

    return (
        <Wrapper>
            <Intro />
            <Playground />
            <Results />
        </Wrapper>
    );
};

export default Game;

import React, { FunctionComponent } from 'react';
import PlaygroundHeader from '../../components/PlaygroundHeader';
import PlaygroundMain from '../../components/PlaygroundMain';
import PlaygroundFooter from '../../components/PlaygroundFooter';

const Playground: FunctionComponent = () => {
    return (
        <>
            <PlaygroundHeader />
            <PlaygroundMain />
            <PlaygroundFooter />
        </>
    );
};

export default Playground;

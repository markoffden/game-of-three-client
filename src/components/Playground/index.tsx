import React, { FunctionComponent } from 'react';
import PlaygroundHeader from '../PlaygroundHeader';
import PlaygroundMain from '../PlaygroundMain';
import PlaygroundFooter from '../PlaygroundFooter';

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

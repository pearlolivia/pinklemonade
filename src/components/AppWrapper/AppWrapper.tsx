import React from 'react';
import { Wrapper } from './styles.ts';

interface Props {
    children: any;
    background: string;
}

const AppWrapper = ({ children, background }: Props) => (
    <Wrapper style={{ backgroundImage: `url(${background})` }}>
        {children}
    </Wrapper>
);

export default AppWrapper;
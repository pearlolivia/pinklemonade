import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled('div')(
    css({
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
    })
);

export const Header = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
});

export const UpButton = styled.img({
    width: '100px',
    height: 'fit-content',
    cursor: 'pointer'
});

export const ContentContainer = styled.div({
    height: 'calc(100vh - 202px)',
    display: 'flex',
    alignItems: 'center'
});
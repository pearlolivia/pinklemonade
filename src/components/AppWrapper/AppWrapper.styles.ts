import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled('div')(
    css({
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
    })
);

export const BackButtonContainer = styled.div({
    position: 'absolute',
    left: '20px',
    padding: '0.5rem',
});

export const BackButton = styled.img({
    width: '80px',
    cursor: 'pointer'
})
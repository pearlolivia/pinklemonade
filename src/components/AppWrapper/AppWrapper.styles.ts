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
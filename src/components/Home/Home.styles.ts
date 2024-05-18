import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Title = styled('h1')(
    css({
        display: 'flex',
        justifyContent: 'center',
    })
);

export const Paragraph = styled('p')(
    css({
        textAlign: 'center',
        padding: '0 100px',
    })
);
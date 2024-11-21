import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "styles";

export const ContactWrapper = styled('div')(
    css`
    padding-left: 2rem;
    padding-bottom: 2rem;
    align-self: end;
    ${mq('mobile')} {
        align-self: start;
    };   
`);

export const IconContainer = styled.div({
    display: 'flex',
    gap: '1rem'
});

export const Icon = styled.img({
    width: '50px',
    cursor: 'pointer'
});

export const EmailText = styled('span')(
    css`
        font-size: 2rem;
        ${mq('mobile')} {
            font-size: 1.5rem;
        };   
`)

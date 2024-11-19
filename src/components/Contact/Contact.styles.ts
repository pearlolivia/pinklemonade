import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "styles";

export const ContactWrapper = styled.div({
    paddingLeft: '2rem',
    paddingBottom: '2rem',
    alignSelf: 'end'
});

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

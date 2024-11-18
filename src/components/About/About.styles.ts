import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "../../styles";

export const AboutWrapper = styled('div')(
    css`
    display: grid;
    padding: 0 2rem;
    grid-template-columns: 40% 60%;
    justify-items: center;
    align-self: start;
    ${mq('tabletPortrait')} {
        grid-template-columns: auto;
    };
`);

export const AboutImage = styled('img')(
    css`
        width: 350px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
`);

export const ImageContainer = styled('div')(
    css`
    ${mq('tabletPortrait')} {
        display: none;
    };
`);
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "styles";

interface ContainerProps {
    className?: string;
}

export const Wrapper = styled('div')<ContainerProps>(
    css`
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        ${mq('mobile')} {
            &.about-us {
                height: calc(100vh + 350px);
            }
        };
`);

export const Header = styled('div')(
    css`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    ${mq('mobile')} {
        padding: 0.2rem 2rem;
    };
`);

export const HeaderText = styled('h1')(
    css`
        font-size: 5rem;
        ${mq('mobile')} {
            font-size: 3rem;
        };
`);

export const UpButton = styled('img')(
    css`
        width: 100px;
        max-height: fit-content;
        cursor: pointer;
        ${mq('mobile')} {
            width: 60px;
            padding-top: 0.5rem;
        };
`);

export const ContentContainer = styled('div')(
    css`
    height: calc(100vh - 202px);
    display: flex;
    align-items: center;
    ${mq('mobile')} {
        &.contact-us {
            height: calc(100vh - 108px);
            flex-direction: column;
            justify-content: end;
        }
    };
`);
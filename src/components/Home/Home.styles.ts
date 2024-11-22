import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { brandColours } from "consts/generalConsts";
import { mq } from "styles";

export const LandingWrapper = styled('div')(
    css`
        display: flex;
        height: calc(100vh - 6rem);
        padding: 3rem;
        align-items: center;
        justify-content: center;
        ${mq('tabletPortrait')} {
            flex-direction: column;
        };
        ${mq('mobile')} {
            padding: 3rem 2rem;
        };
`);

export const LandingImage = styled('img')(
    css`
    height: 540px;
    position: relative;
    borderRadius: 8px;
    ${mq('tablet')} {
        height: 460px;
    };
    ${mq('mobile')} {
        height: 210px;
    };
`);

export const ContentWrapper = styled('div')(
    css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
    ${mq('tabletPortrait')} {
        align-items: center;
    };
    ${mq('mobile')} {
        padding: 0;
    };
`);

export const LogoWidth = styled('img')(
    css`
    width: 600px;
    ${mq('tablet')} {
        width: 400px;
    };
    ${mq('mobile')} {
        width: 240px;
    };
`);

export const ButtonsContainer = styled('div')(
    css`
        display: flex;
        gap: 2rem;
        align-self: center;
        ${mq('mobile')} {
            gap: 1rem;
        };
`);

export const Paragraph = styled('p')(
    css`
        text-align: end;
        padding-left: 2.5rem;
        font-size: 2rem;
        ${mq('tablet')} {
            font-size: 1.5rem;
        };
        ${mq('tabletPortrait')} {
            text-align: center;
        };
        ${mq('mobile')} {
            font-size: 1.1rem;
            padding-left: 0;
        };
`);

export const Option = styled('div')(
    css`
        border: 2px solid #000000;
        padding: 20px 40px;
        border-radius: 40px;
        text-wrap: nowrap;
        cursor: pointer;
        background-color: ${brandColours.cream};
        ${mq('mobile')} {
            padding: 10px 20px;
            font-size: 1.2rem;
        };
    }
`);

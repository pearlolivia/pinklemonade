import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { brandColours } from "../../consts/generalConsts";
import { mq } from "../../styles";

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
`);

export const LandingImage = styled('img')(
    css`
    height: 400px;
    position: relative;
    borderRadius: 8px;
    ${mq('tablet')} {
        height: 280px;
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
`);

export const LogoWidth = styled('img')(
    css`
    width: 600px;
    ${mq('tablet')} {
        width: 400px;
    },
`);

export const ButtonsContainer = styled.div({
    display: 'flex',
    gap: '2rem',
    alignSelf: 'center',
});

export const Paragraph = styled('p')(
    css`
        text-align: end;
        padding-left: 2.5rem;
        font-size: 2rem;
        ${mq('tabletPortrait')} {
            text-align: center;
        };
        ${mq('tablet')} {
            font-size: 1.5rem;
        };
`);

export const Option = styled('div')(
    {
        border: '2px solid #000000',
        padding: '20px 40px',
        borderRadius: '40px',
        textWrap: 'nowrap',
        cursor: 'pointer',
        backgroundColor: brandColours.cream,
    }
);

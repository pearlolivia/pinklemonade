import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "../../styles";
import { brandColours } from "../../consts/generalConsts";

export const Grid = styled('div')(
    {
        position: 'relative',
        left: '4%',
    }
);

export const Photo = styled('img')(
    {
        width: '30%',
        paddingRight: '8px',
    }
);

export const LargePhoto = styled('img')(
    css`
    width: 700px;
    border-radius: 8px;
    ${mq('tablet')} {
        width: 500px;
    };
    ${mq('mobile')} {
        width: 300px;
    };
`);

export const LargePhotoContainer = styled('div')(
    css`
    position: fixed;
    top: calc(100vh / 2);
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    padding: 0.5rem;
    background-color: ${brandColours.cream};
`)
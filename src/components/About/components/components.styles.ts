import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "../../../styles";

export const Question = styled('span')(
    css`
        font-size: 2.75rem;
        font-weight: bold;
        ${mq('laptop')} {
            font-size: 2.25rem;
        };
        ${mq('tabletPortrait')} {
            font-size: 2.75rem;
        };
        ${mq('mobile')} {
            font-size: 1.8rem;
        };
`);

export const Answer = styled('span')(
    css`
        font-size: 1.5rem;
        ${mq('laptop')} {
            font-size: 1.3rem;
        };
        ${mq('tabletPortrait')} {
            font-size: 1.5rem;
        };
        ${mq('mobile')} {
            font-size: 1.1rem;
        };
`);
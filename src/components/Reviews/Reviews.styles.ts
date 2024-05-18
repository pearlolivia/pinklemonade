import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ReviewsWrapper = styled('div')(
    css({
        padding: '0 2rem',
    })
);

export const ReviewWriterWrapper = styled('div')(
    css({
        display: 'flex',
    })
);

export const ReviewWriter = styled('div')(
    css({
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    })
);

export const NameInput = styled('textarea')(
    css({
        width: '15rem',
        background: 'rgba(255, 255, 255, 0.5)',
    })
);

export const ReviewInput = styled('textarea')(
    css({
        width: '20rem',
        height: '12rem',
        background: 'rgba(255, 255, 255, 0.5)',
    })
);

export const StarWrapper = styled('div')(
    css({
        display: 'flex',
        gap: '1rem',
    })
);

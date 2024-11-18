import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ReviewsWrapper = styled('div')(
    css({
        padding: '2rem',
    })
);

export const Heading = styled('h2')(
    {
        textAlign: 'center',
    }
)

export const ReviewWriterWrapper = styled('div')(
    css({
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
    })
);

export const ReviewWriter = styled('div')(
    css({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    })
);

export const NameInput = styled('textarea')(
    css({
        width: '20rem',
        background: 'rgba(255, 255, 255, 0.5)',
    })
);
export const DateInput = styled('input')(
    css({
        width: '11.6rem',
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

export const SubmitWrapper = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
    }
);

export const StarWrapper = styled('div')(
    css({
        display: 'flex',
        gap: '1rem',
    })
);

export const StarCounter = styled('div')(
    {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    }
);

export const ReviewGrid = styled('div')(
    {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'auto auto',
        gap: '1rem',
        padding: '2rem',
    }
);

export const ReviewBox = styled('div')(
    {
        background: 'rgba(255, 255, 255, 0.5)',
        padding: '1rem',
        borderRadius: '5px',
        width: '400px',
        height: 'fit-content',
    }
);

export const TopBar = styled('div')(
    {
        display: 'flex',
        gap: '1rem',
        paddingBottom: '0.5rem',
    }
);

export const Star = styled('img')(
    {
        height: 'fit-content',
    }
);

export const Reviewer = styled('div')(
    {
        display: 'grid',
    }
);

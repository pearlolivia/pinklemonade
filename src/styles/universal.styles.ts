import styled from "@emotion/styled";

const breakpoints = {
    'mobile': 576,
    'tabletPortrait': 768,
    'tablet': 1024, 
    'laptop': 1250
};

export const mq = (device: 'mobile' | 'tablet' | 'tabletPortrait' | 'laptop') => `@media (max-width: ${breakpoints[device]}px)`;

export const AtomicRelativeDiv = styled.div(
    {
        position: 'relative'
    }
);

export const ImageBorder = styled.div(
    {
        padding: '0.25rem',
        backgroundColor: '#000000',
        borderRadius: '8px'
    }
)
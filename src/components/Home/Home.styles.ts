import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Title = styled('h1')(
    css({
        display: 'flex',
        justifyContent: 'center',
    })
);

export const Paragraph = styled('p')(
    css({
        textAlign: 'center',
        padding: '0 1rem',
    })
);

export const SliderWrapper = styled('div')(
    {
        width: '70%',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
    }
);

export const InfoWrapper = styled('div')(
    {
        display: 'flex',
        paddingBottom: '0.5rem',
    }
);

export const Caption = styled('div')(
    {
        width: '70%',
        paddingLeft: '0.5rem',
    }
);

export const LocationAndDate = styled('div')(
    {
        width: '30%',
        textAlign: 'end',
        paddingLeft: '0.5rem',
    }
);

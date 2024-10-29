import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { brandColours } from "../../consts/generalConsts";

export const Title = styled('h1')(
    css({
        display: 'flex',
        justifyContent: 'center',
    })
);

export const Paragraph = styled('p')(
    css({
        textAlign: 'end',
        paddingLeft: '4rem',
        fontSize: '2.6rem',
    })
);

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

import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeaderWrapper = styled('div')(
    css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
})
);

export const Option = styled('div')(
    css({
        border: '2px solid #000000',
        padding: '20px 40px',
        borderRadius: '40px',
        textWrap: 'nowrap',
        cursor: 'pointer',
    })
);

export const Logo = styled('img')(
    css({
        width: '200px',
        padding: '16px',
        background: 'none'
    })
);

export const HeaderItems = styled.div`
    display: flex;
    gap: 2rem;
`;
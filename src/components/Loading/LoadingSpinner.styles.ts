import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CircularProgress } from '@mui/material';

export const SpinnerWrapper = styled('div')(
    css({
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    })
);

export const TextSpan = styled('span')(
    css({
        textAlign: 'center',
    })
)
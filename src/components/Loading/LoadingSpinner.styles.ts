import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
);

export const SpinnerContainer = styled('div')(
    css({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    })
)
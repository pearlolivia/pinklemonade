import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled('div')(
    css({
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
    })
);
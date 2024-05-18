import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SpinnerWrapper = styled('div')(
    css({
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    })
);
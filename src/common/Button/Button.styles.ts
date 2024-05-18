import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { brandColours } from "../../consts/generalConsts";

export const BasicButton = styled.div`
    padding: 20px 60px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 2px solid #000000;
    cursor: pointer;
    &:hover {
        background: ${brandColours.pink}
    }
`;
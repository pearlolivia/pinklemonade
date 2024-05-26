import styled from "@emotion/styled";
import { brandColours } from "../../consts/generalConsts";

interface Props {
    style?: React.CSSProperties;
}

export const BasicButton = styled.div<Props>`
    padding: 20px 60px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 2px solid #000000;
    cursor: pointer;
    &:hover {
        background: ${brandColours.pink}
    }

    ${({ style }) => ({
		...style,
	})}
`;
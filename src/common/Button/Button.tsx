import React from "react";
import { BasicButton } from "./Button.styles";

interface Props {
    children: any;
    onClick: () => any;
    style?: React.CSSProperties;
}

const Button = ({ children, onClick, style }: Props) => (
    <BasicButton onClick={onClick} style={style} >{children}</BasicButton>
);

export default Button;
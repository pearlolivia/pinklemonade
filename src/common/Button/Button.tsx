import React from "react";
import { BasicButton } from "./Button.styles";

const Button = ({ children, onClick }) => (
    <BasicButton onClick={onClick}>{children}</BasicButton>
);

export default Button;
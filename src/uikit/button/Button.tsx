import React, { FC } from 'react';
import { StyledButton } from "./ButtonStyles";
import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({title, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {title}
        </StyledButton>
    );
};

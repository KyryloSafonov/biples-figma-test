import React, { FC } from "react";
import { IInputProps, InputType } from "./types";
import {
    StyledIconWrapper,
    StyledInput,
    StyledInputContainer,
    StyledInputTitle,
    StyledInputWrapper
} from "./InputStyles";
import { ReactComponent as UserIcon } from "../../icons/user_icon.svg"
import { ReactComponent as EmailIcon } from "../../icons/email.svg"
import { ReactComponent as LockIcon } from "../../icons/lock.svg"

export const Input: FC<IInputProps> = ({placeholder, type, title, onChange, error, errorText}) => {

    const getInputIcon = () => {
        switch (type) {
            case InputType.email:
                return <EmailIcon/>;
            case InputType.password:
                return <LockIcon/>;
            default:
                return <UserIcon/>
        }
    }

    return (
        <StyledInputWrapper>
            <StyledInputTitle error={error}>{!error ? title : errorText}</StyledInputTitle>
            <StyledInputContainer error={error}>
                <StyledIconWrapper error={error}>
                    {getInputIcon()}
                </StyledIconWrapper>
                <StyledInput type={type} placeholder={placeholder} error={error} onChange={onChange}/>
            </StyledInputContainer>
        </StyledInputWrapper>
    )
}

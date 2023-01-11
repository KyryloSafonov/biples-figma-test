import React from 'react';
import { FirstCircle, SecondCircle, StyledSuccessWrapper } from "./SuccessSignInStyles";
import { ReactComponent as Success } from "../../icons/success.svg"

const SuccessSignIn = () => {
    return (
            <StyledSuccessWrapper>
                <Success/>
                <div className="text">Sign in confirmed</div>
                <FirstCircle/>
                <SecondCircle/>
            </StyledSuccessWrapper>
    );
};

export default SuccessSignIn;

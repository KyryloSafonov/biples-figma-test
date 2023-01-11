import React, { useState } from 'react';
import {
    BlueCircle,
    PinkCircle, SocialButton, SocialButtonsBlock,
    StyledCheckboxBlock, StyledDividerBlock,
    StyledFormTitle,
    StyledFormWrapper,
    StyledFromBlock
} from "./SignInFormStyles";
import { ReactComponent as Logo } from "../../icons/biples_logo.svg"
import { ReactComponent as Circle } from  "../../icons/circle.svg"
import { ReactComponent as Trust } from "../../icons/trust.svg"
import { ReactComponent as Meta } from "../../icons/meta.svg"
import { ReactComponent as Twitter } from "../../icons/twitter.svg"
import { ReactComponent as Google } from "../../icons/google.svg"
import { Input } from "../../uikit/input/Input";
import { InputType } from "../../uikit/input/types";
import { Button } from "../../uikit/button/Button";
import { Checkbox } from "../../uikit/checkbox/Checkbox";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <StyledFromBlock>
            <Logo/>
            <PinkCircle/>
            <BlueCircle/>
            <StyledFormWrapper>
                <StyledFormTitle>
                    <div className="title">
                        Sign in
                    </div>
                    <div className="account">
                        <span onClick={() => navigate('/sign-up')}>Create account</span> instead?
                    </div>
                </StyledFormTitle>
                <Input
                    title={'User Name'}
                    onChange={(e) => console.log(e)}
                    type={InputType.text}
                    placeholder={'User name here...'}
                    error={false}
                />
                <Input
                    title={'Password'}
                    onChange={(e) => console.log(e)}
                    type={InputType.password}
                    placeholder={'Password'}
                    error={false}
                />
                <StyledCheckboxBlock>
                    <Checkbox
                        isChecked={checked}
                        onChange={() => {
                            setChecked(!checked)
                        }}
                        label="Remember me"
                    />
                    <div className="forgot-password">
                        Forgot your password?
                    </div>
                </StyledCheckboxBlock>
                <Button title="Sign in" onClick={() => navigate('/success')}/>
                <StyledDividerBlock>
                    <div className="divider"/>
                    <div>or</div>
                    <div className="divider"/>
                </StyledDividerBlock>
                <SocialButtonsBlock>
                    <SocialButton>
                        <Meta/>
                    </SocialButton>
                    <SocialButton>
                        <Trust/>
                    </SocialButton>
                    <SocialButton>
                        <Circle/>
                    </SocialButton>
                    <SocialButton>
                        <Google/>
                    </SocialButton>
                    <SocialButton>
                        <Twitter/>
                    </SocialButton>
                </SocialButtonsBlock>
            </StyledFormWrapper>
        </StyledFromBlock>
    );
};

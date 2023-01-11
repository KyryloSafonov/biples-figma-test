import React from 'react';
import { BlueCircle, PinkCircle, StyledFormWrapper, StyledFromBlock } from "./SignUpFormStyles";
import { Input } from "../../uikit/input/Input";
import { InputType } from "../../uikit/input/types";
import { ReactComponent as Logo } from "../../icons/biples_logo.svg"
import { Button } from "../../uikit/button/Button";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
    const navigate = useNavigate();
    return (
        <StyledFromBlock>
            <Logo/>
            <StyledFormWrapper>
                <Input
                    title={'User Name'}
                    onChange={(e) => console.log(e)}
                    type={InputType.text}
                    placeholder={'User name here...'}
                    error={false}
                />
                <Input
                    title={'Email'}
                    onChange={(e) => console.log(e)}
                    type={InputType.email}
                    placeholder={'Email here...'}
                    error={false}
                />
                <Input
                    title={'Password'}
                    onChange={(e) => console.log(e)}
                    type={InputType.password}
                    placeholder={'Password'}
                    error={true}
                    errorText={'Incorrect password'}
                />
                <Input
                    title={'Confirm Password'}
                    onChange={(e) => console.log(e)}
                    type={InputType.password}
                    placeholder={'Confirm password'}
                    error={false}
                    errorText={'Incorrect password'}
                />
                <div style={{marginTop: 20}}>
                    <Button title="Sign up" onClick={() => navigate('/sign-in')}/>
                    <div className="information-section">
                        <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '16.77px'}}>
                            Already have an account?{' '}
                            <span
                                onClick={() => navigate('/sign-in')}
                                style={{color: '#FB15FF', textDecoration: 'underline', cursor: 'pointer'}}
                            >
                                Sign in
                            </span>
                        </div>
                        <div style={{fontSize: '8.06px', lineHeight: '10.4px', fontWeight: 400, whiteSpace: 'nowrap'}}>
                            *by clicking “sign up” button you are agree with our{' '}
                            <span
                                style={{color: '#4079E4', cursor: 'pointer', textDecoration: 'underline'}}>
                                privacy policy
                            </span>
                            {' '}and {' '}
                            <span style={{color: '#4079E4', cursor: 'pointer', textDecoration: 'underline'}}>
                                terms & condition.
                            </span>
                        </div>
                    </div>
                </div>
            </StyledFormWrapper>
            <PinkCircle/>
            <BlueCircle/>
        </StyledFromBlock>
    );
}

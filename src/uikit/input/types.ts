import { ChangeEvent } from "react";


export enum InputType {
    email = 'email',
    password = 'password',
    text = 'text',
    number = 'number',
}

export interface IInputProps {
    title: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: InputType;
    placeholder: string;
    error: boolean;
    errorText?: string;

}

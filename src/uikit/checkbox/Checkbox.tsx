import React, { FC } from 'react';
import { StyledCheckboxWrapper, UncheckedCheckbox } from "./StyledCheckbox";
import { ICheckboxProps } from "./types";
import { ReactComponent as CheckedCheckbox } from '../../icons/checked.svg'

export const Checkbox: FC<ICheckboxProps> = ({onChange, label, isChecked}) => {
    return (
        <StyledCheckboxWrapper onClick={onChange}>
            {isChecked ? <CheckedCheckbox width="14" height="14"/> : <UncheckedCheckbox/>}
            <div className='label'>
                {label}
            </div>
        </StyledCheckboxWrapper>
    );
};

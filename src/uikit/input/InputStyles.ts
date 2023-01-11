import styled from "styled-components";

export const StyledInput = styled.input<{ error: boolean }>`
  height: 100%;
  width: 100%;
  padding-left: 10px;
  font-style: normal;
  color: ${(props: { error: boolean }) =>
          !props.error ? '#FFFFFF' : '#FF0000'
  };
  border-color: transparent;
  background-color: transparent;

  ::placeholder {
    color: #5E6366;
  }

  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: transparent;
  }
`

export const StyledInputContainer = styled.div<{ error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding: 18px 11px;
  border-radius: 10px;
  border: ${(props: { error: boolean }) =>
          !props.error ? '1px solid transparent' : '1px solid #FF0000'
  };
  background-color: rgba(104, 104, 104, 0.22);
  backdrop-filter: blur(2px);

  &:hover {
    border-width: 1px;
    border-style: solid;
    border-color: #B287F4;
  }
`

export const StyledIconWrapper = styled.div<{ error: boolean }>`
  svg {
    fill: ${(props: { error: boolean }) =>
            !props.error ? '#5E6366' : '#FF0000'
    }
  }
`

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const StyledInputTitle = styled.div<{ error: boolean }>`
  font-size: 15px;
  line-height: 19.47px;
  font-weight: 400;
  color: ${(props: { error: boolean }) =>
          !props.error ? '#FFFFFF' : '#FF0000'
  };
`

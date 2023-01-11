import styled from "styled-components";

export const StyledFromBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  
   > svg {
    margin-bottom: 36.55px;
  }
`

export const StyledFormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 25px;
    font-weight: 600;
    line-height: 32.25px;
  }
  .account {
    font-size: 13px;
    font-weight: 400;
    line-height: 16.77px;
    span {
      color: #4079E4;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const StyledCheckboxBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .forgot-password {
    cursor: pointer;
    color: #4079E4;
    font-size: 10px;
    font-weight: 400;
    line-height: 12.9px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`
export const StyledFormWrapper = styled.div`
  width: 363px;
  height: 631px;
  padding: 69px 79px 0 79px;
  border: 1px solid #252525;
  border-radius: 12px;
  background: linear-gradient(20.08deg, rgba(0, 0, 0, 0.48) 6.24%, rgba(10, 0, 0, 0.07) 103.48%);
  backdrop-filter: blur(62.5px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  .information-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    gap: 8px;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px){
    width: 335px;
    height: 580px;
    padding: 49px 66px 19.5px 66px;
    .information-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      gap: 8px;
    }
  }

  @media (min-width: 601px) and (max-width: 1024px){
    width: 310px;
    height: 490px;
    padding: 39px 56px 9.5px 56px;
    gap: 15px;
    .information-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      gap: 8px;
    }
  }

  @media (max-width: 601px){
    width: 310px;
    height: 490px;
    padding: 39px 56px 9.5px 56px;
    gap: 15px;
    .information-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      gap: 8px;
    }
  }
`

export const PinkCircle = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: #FA15FF;
  filter: blur(95.9214px);
  transform: rotate(-15deg);
  position: absolute;
  left: 290px;
  top: 570px;
  z-index: -10;
  @media (min-width: 1025px) and (max-width: 1440px){
    left: 250px;
    top: 500px;
    z-index: -10;
  }

  @media (min-width: 601px) and (max-width: 1024px){
    left: 250px;
    top: 450px;
    z-index: -10;
    width: 130px;
    height: 130px;
  }

  @media (max-width: 601px){
    left: 200px;
    top: 500px;
    z-index: 0;
    width: 120px;
    height: 120px;
  }
`

export const BlueCircle = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background: #1563FF;
  filter: blur(95.9214px);
  transform: rotate(-15deg);
  position: absolute;
  left: 170px;
  top: 600px;
  z-index: -10;
  @media (min-width: 1025px) and (max-width: 1440px){
    left: 150px;
    top: 550px;
    z-index: -10;
  }

  @media (min-width: 601px) and (max-width: 1024px){
    left: 120px;
    top: 580px;
    z-index: -10;
    width: 95px;
    height: 95px;
  }

  @media (max-width: 601px){
    left: 100px;
    top: 500px;
    z-index: -10;
    width: 95px;
    height: 95px;
  }
`

export const StyledDividerBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  .divider {
    width: 165px;
    height: 0;
    border: 1px solid rgba(104, 104, 104, 0.22);
  }
`

export const SocialButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SocialButton = styled.div`
  width: 54px;
  height: 54px;
  background: rgba(104, 104, 104, 0.22);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  align-content: center;
  position: relative;
  cursor: pointer;
  
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 601px) and (max-width: 1024px){
    width: 49px;
    height: 49px;
  }

  @media (max-width: 601px){
    width: 45px;
    height: 45px;
  }
`


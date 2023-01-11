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
export const StyledFormWrapper = styled.div`
  width: 360px;
  height: 638px;
  padding: 69px 86px 0 86px;
  border: 1px solid #252525;
  border-radius: 12px;
  background: linear-gradient(20.08deg, rgba(0, 0, 0, 0.48) 6.24%, rgba(10, 0, 0, 0.07) 103.48%);
  backdrop-filter: blur(62.5px);
  display: flex;
  flex-direction: column;
  gap: 22px;
  //box-shadow: 0px 0px 1000px #FA15FF;
  
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
    width: 285px;
    height: 580px;
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
    width: 285px;
    height: 580px;
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
    top: 550px;
    z-index: -10;
    width: 130px;
    height: 130px;
  }

  @media (max-width: 601px){
    left: 250px;
    top: 600px;
    z-index: -10;
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
    top: 600px;
    z-index: -10;
    width: 95px;
    height: 95px;
  }
`


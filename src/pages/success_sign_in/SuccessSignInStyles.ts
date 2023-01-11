import styled from "styled-components";

export const StyledSuccessWrapper = styled.div`
  width: 215px;
  height: 137px;
  background: linear-gradient(20.08deg, rgba(0, 0, 0, 0.48) 6.24%, rgba(10, 0, 0, 0.07) 103.48%);
  border: 1px solid #252525;
  backdrop-filter: blur(62.5px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  padding: 71px 153px;
  z-index: 1;
  
  svg {
    margin-bottom: 24px;
  }
  .text {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    font-style: normal;
  }

  @media (min-width: 1025px) and (max-width: 1440px){
    width: 215px;
    height: 137px;
    .text {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 25px;
      line-height: 32px;
      font-style: normal;
    }
    svg {
      margin-bottom: 24px;
    }
  }

  @media (min-width: 601px) and (max-width: 1024px){
    width: 115px;
    height: 87px;
    .text {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 22px;
      line-height: 32px;
      font-style: normal;
      white-space: nowrap;
    }
    svg {
      margin-bottom: 17px;
    }
    padding: 51px 133px;
  }

  @media (max-width: 601px){
    width: 100px;
    height: 72px;
    .text {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      font-style: normal;
      white-space: nowrap;
    }
    svg {
      margin-bottom: 12px;
    }
    padding: 31px 113px;
  }
`

export const FirstCircle = styled.div`
  position: absolute;
  background-color: #4DE265;
  width: 128.66px;
  height: 106.21px;
  border-radius: 50%;
  filter: blur(111px);
  transform: rotate(-15deg);
  left: 320px;
  top: 150px;
  z-index: -1;
  @media (min-width: 1025px) and (max-width: 1440px){
    left: 320px;
    top: 150px;
    z-index: -1;
  }

  @media (min-width: 601px) and (max-width: 1024px){
    left: 250px;
    top: 100px;
    width: 100px;
    height: 85px;
  }

  @media (max-width: 601px){
    left: 200px;
    top: 80px;
    width: 80px;
    height: 65px;
  }
`

export const SecondCircle = styled.div`
  position: absolute;
  background-color: #4DE265;
  width: 128.66px;
  height: 106.21px;
  border-radius: 50%;
  filter: blur(111px);
  transform: rotate(-15deg);
  left: 100px;
  top: 80px;
  z-index: -1;
  @media (min-width: 1025px) and (max-width: 1440px){
    left: 100px;
    top: 80px;
    z-index: -1;
  }

  @media (min-width: 601px) and (max-width: 1024px){
    left: 100px;
    top: 50px;
    width: 100px;
    height: 85px;
    z-index: -1;
  }

  @media (max-width: 601px){
    left: 100px;
    top: 50px;
    width: 80px;
    height: 65px;
    z-index: -1;
  }
`

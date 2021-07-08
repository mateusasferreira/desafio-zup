import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;

  width: 1240px;
  min-height: 615px;

  overflow: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  padding: 12px 60px;

  h1 {
    font-family: ${props => props.theme.standardFont};
    font-size: 128px;
    font-weight: 600;
  }

  p {
    font-family: ${props => props.theme.standardFont};
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
  }

  button {

    width: 179px;
    height: 60px;
    display: block;

    margin: 30px 0 20px auto;

    border: none;
    border-radius: 20px;

    background-color: ${props => props.theme.highlightColor};

    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.standardFont};
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  ul {
          
      display: flex;
      flex-direction: column;
      
      gap: 15px;

      li {
        background: rgba(26, 72, 110, 0.13);
        
        width: calc(100% - 60px);
        height: 64px;
        padding: 0 35px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          color: ${props => props.theme.primaryColor};
          
          font-family: ${props => props.theme.standardFont};

          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
        }

    } 


  }

`;

export const OverlayBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, .55);

  z-index: 99;

`
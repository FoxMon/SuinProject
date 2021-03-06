import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.css'

function paymentHome({ history }) {
  return (
    <Wrapper>
      <div className = "payment_title">
        <h2>SUIN-PHARMACY</h2>
        <h4>Paycheck</h4>
      </div>
      <div className ="payment_text"></div>
      <ButtonContainer>
        <Button onClick={() => history.push('/payment')}>
          <Icon type="credit-card" />
            Payment
        </Button>
        <Button onClick={() => history.push('/certification')}>
          <Icon type="user" />
            Certification
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > div {
    position: absolute;
    left: 0;
    right: 0;
  }
  > div:first-child {
    background-color: #344e81;
    top: 0;
    bottom: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > * {
      color: #fff;
    }

    h4 {
      margin: 0;
      line-height: 1.5;
    }
  }
  > div:nth-child(2) {
    top: 50%;
    bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  margin-top: -5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 10rem;
    width: 15rem;
    margin: 0 0.5rem;
    border: none;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.13);
    .anticon {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      & + span {
        margin: 0;
      }
    }
  }

  button:hover {
    color : white;
    background-color : black;
    transition : 1s;
    border : 1px solid white;
  }
`;

export default withRouter(paymentHome);

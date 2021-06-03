import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { withUserAgent } from 'react-useragent';
import queryString from 'query-string';

const { Item } = Form;

function Certification({ history, form, ua }) {
  const { getFieldDecorator, validateFieldsAndScroll } = form;

  function handleSubmit(e) {
    e.preventDefault();
    
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        /* 가맹점 식별코드 */
        const userCode = 'imp10391932';
        /* 결제 데이터 */
        const {
          merchant_uid,
          name,
          phone,
          min_age,
        } = values;

        const data = {
          merchant_uid,
        };

        if (name) {
          data.name = name;
        }
        if (phone) {
          data.phone = phone;
        }
        if (min_age) {
          data.min_age = min_age;
        }

        if (isReactNative()) {
          /* 리액트 네이티브 환경일때 */
          const params = {
            userCode,
            data,
            type: 'certification', // 결제와 본인인증을 구분하기 위한 필드
          };
          const paramsToString = JSON.stringify(params);
          window.ReactNativeWebView.postMessage(paramsToString);
        } else {
          /* 웹 환경일때 */
          const { IMP } = window;
          IMP.init(userCode);
          IMP.certification(data, callback);
        }
      }
    });
  }

  /* 본인인증 후 콜백함수 */
  function callback(response) {
    const query = queryString.stringify(response);
    history.push(`/certification/result?${query}`);
  }

  function isReactNative() {
    /*
      리액트 네이티브 환경인지 여부를 판단해
      리액트 네이티브의 경우 IMP.certification()을 호출하는 대신
      iamport-react-native 모듈로 post message를 보낸다

      아래 예시는 모든 모바일 환경을 리액트 네이티브로 인식한 것으로
      실제로는 user agent에 값을 추가해 정확히 판단해야 한다
    */
    if (ua.mobile) return true;
    return false;
  }

  return (
    <Wrapper>
      <Header>SUIN-PHARMACY</Header>
      <FormContainer onSubmit={handleSubmit}>
        <Item>
          {getFieldDecorator('merchant_uid', {
            initialValue: `min_${new Date().getTime()}`,
            rules: [{ required: true, message: 'Please enter order number.' }],
          })(
            <Input size="large" addonBefore="Order Number" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('name', {
            initialValue : 'John',
            rules : [{ required : true, message: 'Please enter username.' }]})(
            <Input size="large" addonBefore="Name" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('phone', {
            initialValue : '00012341234',
            rules : [{ required : true, message: 'Please enter your phone number.' }]
          })(
            <Input size="large" type="number" addonBefore="Tel" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('min_age', {
            initialValue : '00',
            rules : [{ required : true, message : 'Please enter your age.' }]
          })(
            <Input
              size="large"
              type="number"
              addonBefore="Min age"
            />,
          )}
        </Item>
        <Button type="primary" htmlType="submit" size="large">
          Certification
        </Button>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight : bold;
  font-size : 0.8rem;
`;

const Header = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  padding-top: 0;
  font-size: 3rem;
`;

const FormContainer = styled(Form)`
  width: 350px;
  border-radius: 3px;

  .ant-row {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    display: flex;
    align-items: center;
  }
  .ant-col.ant-form-item-label > label::after {
    display: none;
  }

  .ant-form-explain {
    margin-top: 0.5rem;
    margin-left: 9rem;
  }

  .ant-input-group-addon:first-child {
    width: 9rem;
    text-align: left;
    color: #000;
    font-size: 1.2rem;
    border: none;
    background-color: inherit;
    margin-right : 10px;
  }
  .ant-input-group > .ant-input:last-child {
    border-radius: 4px;
  }

  .ant-col {
    width: 100%;
  }

  button[type='submit'] {
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
    border : none;
    background-color : black;
    color : white;
    font-weight : bold;
    border-radius : 5px;
  }
  
  button:hover {
    color : black;
    background-color : white;
    border : 2px solid black;
    transition : 1s;
  }

  input {
    background-color : transparent;
    border : 2px solid black;
    font-weight : bold;
  }

  input:hover {
    background-color : black;
    color : white;
    transition : 1s;
  }

  input[type = "number"] {
    font-size : 1.0rem;
    padding : 0 11px;
  }
`;

const CertificationForm = Form.create({ name: 'certification' })(Certification);

export default withUserAgent(withRouter(CertificationForm));

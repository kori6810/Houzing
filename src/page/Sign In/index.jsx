import React, { useState } from 'react';
import { Container, Error, Info, Wrapper } from './styles';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer";
import Input from "../../components/Generic/Input/Input";
import {Button} from "../../components/Generic/Buttons/Button";
import Checkbox from "../../components/Generic/Checkbox";


export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const { REACT_APP_BASE_URL: url } = process.env;

  // eslint-disable-next-line
  const { mutate } = useMutation(() => {

    return fetch(`${url}/public/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {

    console.log(email, password);
    if (email?.length && password?.length) {
      
      mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              localStorage.setItem('token', res?.authenticationToken)
              setError(false)
              navigate('/home')
            } else {
              setError('Email yoki Password da Hatolik');
            }

          },
          onError: (res) => {
            console.log(res, 'err')
          }
        }
      );
    } else {
      setError('Email yoki Password bosh bolmaslik kerak');
    }
  };

  return (
    <>
      <Container>
        <Wrapper> 
          <div className='title'>Sign In</div>
          <Input
            onChange={({ target: { value } }) => {
              setEmail(value)
              setError(false)
            }}
            value={email}
            width={'100%'}
            mt={60}
            placeholder={'Email'}
          />
          <Input type='password'
            onChange={({ target: { value } }) => {
              setPassword(value)
              setError(false )
            }
            }
            value={password}
            mt={40}
            placeholder={'Password'}
          />
          {error?.length ? <Error>{ error}</Error> : null}
          <Info> 
            <Checkbox>Remember me</Checkbox>
            <a href='/signIn'>Forgot</a>
          </Info>
          <Button mt={32} type={'primary'} onClick={onSubmit}>
            Login
          </Button>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
export default SignIn;

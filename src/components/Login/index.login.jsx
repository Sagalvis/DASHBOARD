import React, { Fragment } from 'react'
import './css/Login.css'
import { BackBox, BackBoxLogin, BackBoxRegister, ContainerAll, ContainerBody, ConteMain } from './styled.login';


const Login = () => {
  return ( 
    <Fragment>
      <ContainerBody>
        <ConteMain>
          <ContainerAll>
            <BackBox>
              <BackBoxLogin>gg</BackBoxLogin>
              <BackBoxRegister>hh</BackBoxRegister>
            </BackBox>
          </ContainerAll>
        </ConteMain>
      </ContainerBody>
    </Fragment>
  );
}

export default Login;
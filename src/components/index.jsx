import React from 'react'
import MenuDesplegable from './Header/Menu/index.menu';
import { Fragment } from 'react';
import { ContainerMain } from './styled';
import HeaderP from './Header/index.header';


const Dashboard = () => {
  return ( 
    <Fragment>
      <ContainerMain>
        <HeaderP/>
        <MenuDesplegable/>
      </ContainerMain>
    </Fragment>
  );
}

export default Dashboard;
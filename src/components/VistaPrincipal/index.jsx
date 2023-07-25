import React, { Fragment } from 'react'
import HeaderP from '../Header/index.header';
import { ContainerHeader} from './styled';
import MenuDeplegable from '../Header/Menu/index.menu';

const Principal = () => {
  return ( 
    <Fragment>
      
      <ContainerHeader>
          <HeaderP/>
        </ContainerHeader>
        
      
    </Fragment>
  );
}

export default Principal;

export const Menu = () => {
  return (
    <>
    <MenuDeplegable/>
    
    </>
  );
}
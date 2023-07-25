import React, { Fragment } from 'react'
import { ContHeader,ContainerPerfilRol, ContainerProfileNameRol, ContainerSetting, Name, Perfil, Rol, Titulo } from './styled.header';
import { LogoSocetech } from '../Header/styled.header'
import * as imagenes from '../img'
import {RiUserSettingsLine} from 'react-icons/ri'


const HeaderP = () => {
  return ( 
    <Fragment>
      <ContHeader>
        <LogoSocetech src={imagenes.HeaderLogo} alt='Logo'/>
        <Titulo>SocceTech</Titulo>
        <ContainerProfileNameRol>
          <Perfil></Perfil>
          <ContainerPerfilRol>
            <Name>Sergio Galvis</Name>
            <Rol>Administrador</Rol>
          </ContainerPerfilRol>
        </ContainerProfileNameRol>
        <ContainerSetting>
          <RiUserSettingsLine /> 
        </ContainerSetting>
      </ContHeader>
    </Fragment>
  );
}

export default HeaderP;
import styled from 'styled-components';

/* Inicio Contenedor principal de la barra lateral */
export const ContainerMain = styled.div`
  color: white;
  position: sticky;
  padding-top: 20px;
  background: #0575e6; 
  background: -webkit-linear-gradient(to right,#021b79,#0575e6); 
  background: linear-gradient(to right,#021b79,#0575e6);
  height: 100vh;
`

/* Boton que depliega la barra lateral (Pendiente de revisar la "top") */
export const Sidebarbutton = styled.div`
  position: absolute;
  top: 70px; 
  right: -18px;
  width: 50px;
  height: 50px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
  border: none;
  outline: none;
`

/* Inicio Contenedor del logo barra desplegable */
export const Logocontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

/* Contenedor de la imagen del logo barra desplegable */
export const Imgcontent = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
`
export const LogoSideBar = styled.img`
  max-width: 100%;
  height: auto;
`;
/* Final Contenedor del logo barra desplegable */

/* Inicio Contenedor de los Inconos barra desplegable */
export const LinkContainer = styled.div`
  display: flex;
  
`
export const Linkicon = styled.div`
  padding: 8px 16px; 
  display: flex;
  color: white;
  svg {
    font-size: 35px;
  }
`;


/* Final Contenedor de los Inconos barra desplegable */

/* Linea divisora de la barra desplegable */
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: gray;
  margin: 48px 0; 
`;

export const Titulo = styled.button`
  font-family: 'Faster One', cursive;
  color: white;
  font-size: 2.7rem;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
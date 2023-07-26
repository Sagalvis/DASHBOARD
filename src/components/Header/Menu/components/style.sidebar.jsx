import styled from 'styled-components';

/* Inicio Contenedor principal de la barra lateral */
export const ContainerMain = styled.div`
  color: white;
  position: sticky;
  padding-top: 20px;
  background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #021b79,
    #0575e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #021b79,
    #0575e6
  );
  height: 89.9vh;
`

/* Boton que depliega la barra lateral (Pendiente de revisar la "top") */
export const Sidebarbutton = styled.button`
  position: absolute;
  top: 48px; /* Reemplazar "48px" con el valor que corresponda a xxlSpacing */
  right: -18px;
  width: 32px;
  height: 32px;
  background-color: #000000;
  border-radius: 50%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2), 0 0 7px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
  border: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
  font-family: inherit;
  outline: none;
`

/* Inicio Contenedor del logo barra desplegable */
export const Logocontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 48px; /* Reemplazar "48px" con el valor que corresponda a lgSpacing */
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
  padding: 8px 16px; /* Reemplazar "8px 16px" con los valores que corresponda a smSpacing y mdSpacing respectivamente */
  display: flex;
  color: white;
  svg {
    font-size: 35px;
  }
  &.active {
    svg {
      font-size: 35px;
      color: ${(props) => props.theme.bg4}; /* Puedes cambiar esto por un color específico si es necesario */
    }
  }
`;


/* Final Contenedor de los Inconos barra desplegable */

/* Linea divisora de la barra desplegable */
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: gray;
  margin: 48px 0; /* Reemplazar "48px" con el valor que corresponda a lgSpacing */
`;


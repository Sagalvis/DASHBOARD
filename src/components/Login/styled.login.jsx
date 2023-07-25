import styled from 'styled-components';

export const ContainerBody = styled.body`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`
/*------ START CONTAINER MAIN----- */
export const ConteMain = styled.main`
  width: 100%;
  height: 400px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/*------ START CONTAINER ALL----- */
export const ContainerAll = styled.div`
  width: 100%;
  height: 20.875rem;
  max-width: 50rem;
`;
/* ------START BACK BOX-------- */
export const BackBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(39, 214, 253, 0.5);
`;



export const BackBoxLogin = styled.div`


`;

export const SubTituLogin = styled.h3`
  
`;
export const ParagraphLogin = styled.p`

`;

export const ButtonLogin = styled.button`
  
`;
/* ------FINISH BACK BOX LOGIN-------- */

/*------ START BACK BOX REGISTER----- */
export const BackBoxRegister = styled.div`
  
`;

export const SubTituRegister = styled.h3`
  
`;

export const ParagraphRegister = styled.p`

`;

export const ButtonRegister = styled.button`
  
`;
/* ------FINISH BACK BOX REGISTER-------- */
/* ------FINISH BACK BOX-------- */
/*------ FINISH CONTAINER ALL----- */
/*------ FINISH CONTAINER MAIN----- */
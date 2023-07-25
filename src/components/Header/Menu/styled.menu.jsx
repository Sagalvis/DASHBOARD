import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: rgb(255, 255, 255);
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
`;

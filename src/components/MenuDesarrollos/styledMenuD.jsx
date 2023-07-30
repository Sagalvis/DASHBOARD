import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
`;
import styled from "styled-components";

export function Home() {
  return (
    <>
    <Container>
      <h1>Home</h1>
    </Container>

    {/* Aqui va el profile home. */}
    <div className="ContenedorPerfil">
      <div className="CirculoPerfil">

      </div>
    </div>
    </>

  );
}
const Container =styled.div`
  height: auto;
  width: 100px;
  background-color: red;
  margin: 0;

`
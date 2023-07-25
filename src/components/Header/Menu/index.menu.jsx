import React, { useState } from "react";
import { MyRoutes } from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Container } from "./styled.menu";

function MenuDesplegable() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Container className={sidebarOpen ? "sidebarState active" : ""}>
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <MyRoutes />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default MenuDesplegable;
import React, { useState } from "react";
import { MyRoutes } from "./SideBar/components/Routes/routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./SideBar/indexSideBar";
import { Container } from "./styledMenuD";

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
import { AiOutlineLeft, AiOutlineHome, AiOutlineApartment, AiOutlineSetting} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { ContainerMain, Divider, Imgcontent, LinkContainer, Linkicon, LogoSideBar, Logocontent, Sidebarbutton } from "./style.sidebar";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const CustomLink = ({ icon, label, to, sidebarOpen }) => {
    return (
      <LinkContainer>
        <NavLinkStyled to={to} activeClassName="active" style={{ color: "white", display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Linkicon>{icon}</Linkicon>
          {sidebarOpen && <span>{label}</span>}
        </NavLinkStyled>
      </LinkContainer>
    );
  };

  return (
    <ContainerMain isOpen={sidebarOpen}>
      <Sidebarbutton onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </Sidebarbutton>
      <Logocontent>
        <Imgcontent>
        <LogoSideBar/>
        </Imgcontent>
      </Logocontent>
      <Divider/>
      {linksArray.map(({ icon, label, to }) => (
        <CustomLink
          key={label}
          icon={icon}
          label={label}
          to={to}
          sidebarOpen={sidebarOpen}
        />
      ))}
      <Divider/>
      {secondarylinksArray.map(({ icon, label, to }) => (
        <CustomLink
          key={label}
          icon={icon}
          label={label}
          to={to}
          sidebarOpen={sidebarOpen}
        />
      ))}
      <Divider />
      
    </ContainerMain>
  );
}
//#region Data links
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estadisticas",
    icon: <MdOutlineAnalytics />,
    to: "/estadisticas",
  },
  {
    label: "Productos",
    icon: <AiOutlineApartment />,
    to: "/productos",
  },
  {
    label: "Diagramas",
    icon: <MdOutlineAnalytics />,
    to: "/diagramas",
  },
  {
    label: "Reportes",
    icon: <MdOutlineAnalytics />,
    to: "/reportes",
  },
];
const secondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/null",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
];
//#endregion

//#region STYLED COMPONENTS
const NavLinkStyled = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
`
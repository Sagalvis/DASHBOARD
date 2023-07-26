import { AiOutlineLeft, AiOutlineHome, AiOutlineSetting} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import {BsShield} from "react-icons/bs"
import {TbPlayFootball} from "react-icons/tb"
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
    label: "Club",
    icon: <BsShield />,
    to: "/Club",
  },
  {
    label: "Player",
    icon: <TbPlayFootball />,
    to: "/Player",
  },
  {
    label: "Macht Day",
    icon: <MdOutlineAnalytics />,
    to: "/MatchDay",
  },
  {
    label: "Status Player",
    icon: <MdOutlineAnalytics />,
    to: "/StatusPlayer",
  },
  {
    label: "Status General",
    icon: <MdOutlineAnalytics />,
    to: "/StatusGeneral",
  },
  {
    label: "Stadium",
    icon: <MdOutlineAnalytics />,
    to: "/Stadium",
  },
  {
    label: "Positions",
    icon: <MdOutlineAnalytics />,
    to: "/Positions",
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
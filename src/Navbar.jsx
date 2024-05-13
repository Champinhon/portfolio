import { useState } from "react";
import "./navbar.css";
import styled from "styled-components";
export const Nav = styled.nav`
    margin-left: 15%;
    margin-right: 15%;
    min-height: 9vh;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Courier New", Courier, monospace;
`;

export const Logo = styled.h1`
  font-size: 25px;
  color: black;
  font-family: "Courier New", Courier, monospace;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  font-family: "Courier New", Courier, monospace;
`;

export const Link1 = styled.a`
  color: black;

  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  font-family: "Courier New", Courier, monospace;
`;
export const Link2 = styled.a`
  color: white;

  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  font-family: "Courier New", Courier, monospace;
`;
export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: black;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
const Navbar = ({ onProjectsClick, onContactClick, onAboutmeClick }) => {
  const [toggle, toggleNav] = useState(false);
  const text = "<Víctor Salgado/>";
  return (
    <>
      <Nav>
        <Logo>{text}</Logo>
        <Menu>
          <Item>
            <Link1 onClick={onAboutmeClick} target="#">About me</Link1>
          </Item>
          <Item>
            <Link1 onClick={onProjectsClick} target="#">Projects</Link1>
          </Item>
          <Item>
            <Link1 onClick={onContactClick} target="#">Contact</Link1>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link2 onClick={onAboutmeClick} target="#">About me</Link2>
          </Item>
          <Item>
            <Link2 onClick={onProjectsClick} target="#">Projects</Link2>
          </Item>
          <Item>
            <Link2 onClick={onContactClick} target="#">Contact</Link2>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  gap: 50px;
  align-items: baseline;
  font-size: 18px;
  padding: 20px;
  background-color: skyblue;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MainTitle = styled.h1`
  font-size: 20px;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

export const NavLinkStyle = styled(NavLink)`
  color: #212121;
  &.active {
    color: yellow;
  }
`;

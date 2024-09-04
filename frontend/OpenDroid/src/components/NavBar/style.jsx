import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #223321;
  padding: 10px;
  display: flex;
  align-items: center;
  color: white;
  font-family:  'Montserrat', sans-serif;;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 100px;   
  height: auto;  
  margin-right: 20px; /
`;

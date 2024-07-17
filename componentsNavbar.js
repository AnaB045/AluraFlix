import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  a {
    color: white;
    text-decoration: none;
  }
`;

export default Navbar;

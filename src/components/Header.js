import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
  font-size: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  margin-left: 15px;
  font-size: 20px;
`;

const Header = (props) => {
  return (
    <header>
      <HeaderStyle>
        <h1>Fruit Emporium</h1>
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </LinkContainer>
      </HeaderStyle>
    </header>
  );
};

export default Header;

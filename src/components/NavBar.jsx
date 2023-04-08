import styled from "styled-components";
import SupportedLink from "./SupportedLink";

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 10px;

    padding: 10px 0;

    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    font-size: 1.1rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <SupportedLink />
    </StyledNav>
  );
};

export default NavBar;

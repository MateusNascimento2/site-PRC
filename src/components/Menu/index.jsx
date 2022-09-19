import { StyledMenu } from "./styles";
import { bool } from 'prop-types';
import { NavLink } from "react-router-dom";

export function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <NavLink to="/">
        <span role="img" aria-label="Home"></span>
        Home
      </NavLink>
      <NavLink to="/about">
        <span role="img" aria-label="Quem Somos"></span>
        Quem Somos
      </NavLink>
      <NavLink to="/blog">
        <span role="img" aria-label="Blog"></span>
        Blog
      </NavLink>
      <NavLink to="/contact">
        <span role="img" aria-label="Contato"></span>
        Contato
      </NavLink>
      <button type="button">
        Venda seu precatório
      </button>
    </StyledMenu>
  );
}
Menu.propTypes = {
    open: bool.isRequired,
  }

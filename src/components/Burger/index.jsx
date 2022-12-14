import { StyledBurger } from "./Burger.styled";
import { bool, func } from 'prop-types';

export function Burger({open, setOpen}) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

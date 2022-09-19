import styled from "styled-components";

export const StyledMenu = styled.nav`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--dim-gray);
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-family: "Lekton";
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }

  button {
    padding: 0 1rem;
    height: 3rem;
    border: none;
    border-radius: 0.1rem;
    font-size: 1.4rem;
    color: black;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
      color: black;
    }
  }

  @media (min-width:900px){
    display:none;
  }
`;

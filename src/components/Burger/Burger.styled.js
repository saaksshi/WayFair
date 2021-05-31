import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

export const StyledBurgerBlock = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.open ? "flex-start" : "center")};
  justify-content: space-around;
  padding-left: ${(props) => (props.open ? "15px" : "0")};
`;

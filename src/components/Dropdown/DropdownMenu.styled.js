import styled from "styled-components";

export const DropDown = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  width: 2rem;
  /* right: 0; */
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: ${({ open }) => (open ? "block" : "none")};
`;

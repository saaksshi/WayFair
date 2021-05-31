import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HamburgerMenu = styled.div`
  flex-basis: ${(props) => (props.open ? "270px" : "50px")};
  max-width: ${(props) => (props.open ? "270px" : "50px")};
  border-right: 1px solid #dddddd;
`;

export const Content = styled.div`
  flex-basis: ${(props) => (props.open ? "90%" : "100%")};
  max-width: ${(props) => (props.open ? "90%" : "100%")};
`;

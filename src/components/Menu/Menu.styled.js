import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  padding: 0 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const MenuItem = styled.div`
  font-size: 0.7rem;
  padding: 0.3rem 0;
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.5rem;
  }
`;

export const MenuItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const SubItem = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  padding-left: 25px;

  a {
    margin-bottom: 5px;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: darkmagenta;
      font-weight: 700;
    }
  }
`;

export const MenuHeading = styled.span`
  margin-left: 8px;
  font-size: 16px;
`;

export const MenuIcons = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

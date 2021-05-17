import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const MenuItem = styled.div`
  font-size: 0.7rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.primaryDark};
  transition: color 0.3s linear;
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

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const SubItem = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

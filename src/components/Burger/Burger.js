import { StyledBurger, StyledBurgerBlock } from "./Burger.styled";
import menu from "../../assets/menu.svg";

function Burger({ open, setOpen, ...props }) {
  const isExpanded = open ? true : false;
  return (
    <StyledBurgerBlock>
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => setOpen(!open)}
        {...props}
      >
        <img src={menu} alt="Menu" />
      </StyledBurger>
    </StyledBurgerBlock>
  );
}

export default Burger;

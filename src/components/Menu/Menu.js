import { StyledMenu, MenuItem, MenuItemTitle, SubItem } from "./Menu.styled";
import icon from "../../assets/smiley.svg";
import arrowDown from "../../assets/down-arrow.svg";
import arrowUp from "../../assets/up-arrow.svg";

function Menu({ open, navigation, toggleMenu }) {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      {navigation.map((navItem) => {
        return (
          <MenuItem key={navItem.id}>
            <MenuItemTitle onClick={() => toggleMenu(navItem.id)}>
              <div>
                <span>
                  <img src={icon} alt={navItem.title} />
                </span>
                <span>{navItem.title}</span>
              </div>
              <div>
                <span>
                  {navItem.showChild ? (
                    <img src={arrowDown} alt={navItem.title} />
                  ) : (
                    <img src={arrowUp} alt={navItem.title} />
                  )}
                </span>
              </div>
            </MenuItemTitle>

            <SubItem show={navItem.showChild}>
              {navItem.children.map((child) => {
                return (
                  <a href="/" key={child.id}>
                    {child.title}
                  </a>
                );
              })}
            </SubItem>
          </MenuItem>
        );
      })}
    </StyledMenu>
  );
}

export default Menu;

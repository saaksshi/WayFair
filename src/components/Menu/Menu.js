import {
  StyledMenu,
  MenuItem,
  MenuItemTitle,
  SubItem,
  MenuHeading,
  MenuIcons
} from "./Menu.styled";
import icon from "../../assets/smiley.svg";
import arrowDown from "../../assets/down-arrow.svg";
import arrowUp from "../../assets/up-arrow.svg";

function Menu({ open, navigation, toggleMenu }) {
  return (
    <StyledMenu open={open}>
      {navigation.map((navItem) => {
        return (
          <MenuItem key={navItem.id}>
            {open ? (
              <MenuItemTitle onClick={() => toggleMenu(navItem.id)}>
                <div>
                  <span>
                    <img src={icon} alt={navItem.title} />
                  </span>
                  <MenuHeading>{navItem.title}</MenuHeading>
                </div>
                {navItem.children.length === 0 ? null : (
                  <div>
                    <span>
                      {navItem.showChild ? (
                        <img src={arrowDown} alt={navItem.title} />
                      ) : (
                        <img src={arrowUp} alt={navItem.title} />
                      )}
                    </span>
                  </div>
                )}
              </MenuItemTitle>
            ) : (
              <MenuIcons>
                <img src={icon} alt={navItem.title} />
              </MenuIcons>
            )}

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

import React, { useState } from "react";
import logoUrl from "../../assets/logo.svg";
import account from "../../assets/account.svg";
import arrowDown from "../../assets/down-arrow.svg";
import { StyledHeader } from "./Header.styled";
import DropdownMenu from "../Dropdown/DropdownMenu";

function Header() {
  const [open, setOpen] = useState(false);
  const toggleDropDown = () => {
    setOpen(!open);
  };
  return (
    <StyledHeader>
      <div>
        <img src={logoUrl} alt="Wayfair" />
        <span>
          wayfair <span>PARTNER HOME</span>
        </span>
      </div>
      <div onClick={toggleDropDown}>
        <span>
          Safavieh <img src={arrowDown} alt="arrowDown" />
        </span>
        <img src={account} alt="Account" />
      </div>

      <DropdownMenu open={open} />
    </StyledHeader>
  );
}

export default Header;

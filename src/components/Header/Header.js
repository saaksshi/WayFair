import React from "react";
import logoUrl from "../../assets/logo.svg";
import account from "../../assets/account.svg";
import { StyledHeader } from "./Header.styled";

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={logoUrl} alt="Wayfair" />
        <span>
          wayfair <span>PARTNER HOME</span>
        </span>
      </div>
      <img src={account} alt="Account" />
    </StyledHeader>
  );
}

export default Header;

import React from "react";
import { Link } from "gatsby";
import { Container } from "components/common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";
import data from "../../../../data/config";

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <b style={{ fontSize: "21px" }}>{data.defaultTitle}</b>
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;

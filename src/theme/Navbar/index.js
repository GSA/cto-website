import React from "react";
import Banner from "@site/src/components/Banner";
import Navbar from "@theme-original/Navbar";

export default function NavbarWrapper(props) {
  return (
    <>
      <Banner />
      <Navbar {...props} />
    </>
  );
}

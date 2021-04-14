import React from "react";

import { Navbar } from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar bg="light" variant="dark" className="change-navbar">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo-cs-01-01.png"
          width="70"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/GitHub-logo.png"
          width="40"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
    </Navbar>
  );
}

import React, { Component } from "react";
import {
  Navbar,
  Form,
  Container,
  Nav,
  NavLink,
  Button,
  FormControl,
} from "react-bootstrap";
import logo from "./logo192.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />{" "}
                React site
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavLink as={Link} to="/">
                    Home
                  </NavLink>
                  <NavLink as={Link} to="/about">
                    About us
                  </NavLink>
                  <NavLink as={Link} to="/contacts">
                    Contacts
                  </NavLink>
                  <NavLink as={Link} to="/blog">
                    Blog
                  </NavLink>
                </Nav>

                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="md-sm-2"
                  />
                </Form>
                <Button variant="outline-info">Search</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </>
    );
  }
}

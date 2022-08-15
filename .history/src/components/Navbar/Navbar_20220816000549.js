import React, { Component } from "react";
import {
  Navbar,
  Row,
  Col,
  Button,
  Nav,
  Container,
  DropdownButton,
  Dropdown,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../Search/Search";
class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col id="bigHead"><a style={{textDecoration:'none',color:'white'}} href="/">Filmyzone </a></Col>
            <Col className="w-50" style={{ minWidth: "fit-content" }}>
              <Search></Search>
            </Col>
          </Row>
        </div>
        <Navbar bg="transparent" expand="lg" variant="dark" className="px-0">
          <Navbar.Brand
            id="hea"
            style={{ fontWeight: "bold", fontSize: 25, fontFamily: "Poppins" }}
          >
            Menu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link id="blur" className="text-light px-1" href="/">
                <Button variant="transparent" id="blur2">
                  Home
                </Button>
              </Nav.Link>
              <Nav.Link
                id="blur"
                className="text-light px-1"
                href="/category/hindi-movies"
              >
                <Button variant="transparent" id="blur2">
                  {" "}
                  Hindi Movies
                </Button>
              </Nav.Link>
              <Nav.Link
                id="blur"
                className="text-light px-1"
                href="/category/hollywood-movies"
              >
                <Button variant="transparent" id="blur2">
                  {" "}
                  English Movies
                </Button>
              </Nav.Link>
              <Nav.Link
                id="blur"
                className="text-light px-1"
                href="/category/old-movies"
              >
                <Button variant="transparent" id="blur2">
                  {" "}
                  Old
                </Button>
              </Nav.Link>
              <Nav.Link
                id="blur"
                className="text-light px-1"
                href="/category/hindi-dubbed-movies"
              >
                <Button variant="transparent" id="blur2">
                  {" "}
                  Hindi Dubbed{" "}
                </Button>
              </Nav.Link>
              <Nav.Link
                id="blur"
                className="text-light px-1"
                href="/category/south-movies"
              >
                <Button variant="transparent" id="blur2">
                  {" "}
                  South Dubbed{" "}
                </Button>
              </Nav.Link>
              <DropdownButton
                className="CCCC"
                id="dropdown-basic-button px-1 "
                style={{
                  padding: ".5rem 1rem",
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  backgroundColor: " rgb(8, 113, 184)",
                  boxShadow: 0,
                  outline: 0,
                  // width: "12%",
                }}
                color="white"
                title="Yearly"
                variant="transparent"
                id="blur2"
              >
                <Dropdown.Item href="/category/2021-movies">
                  2022 movies
                </Dropdown.Item>
                <Dropdown.Item href="/category/2020-movies">
                  2021 movies
                </Dropdown.Item>
                <Dropdown.Item href="/category/2019-movies">
                  2020 movies
                </Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </div>
    );
  }
}

export default NavBar;

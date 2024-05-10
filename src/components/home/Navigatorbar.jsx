import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import git from "../../icons/git.svg";
import twitter from "../../icons/twitter.svg";
import linkedin from "../../icons/linkedin.svg";
import meta from "../../icons/meta.svg";
import "../../components/home/Navigatorbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faIndustry,
  faChalkboardTeacher,
  faScaleBalanced,
  faCheck,
  faConciergeBell,
  faBuilding,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
function Navigatorbar() {
  return (
    <div className="APP">
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={meta}
              alt="meta"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Future Code
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-expand-lg navbar-light bg-dark py-3 shadow-sm">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/communication">İletişim</Nav.Link>
              <NavDropdown title="MegaMenü" id="basic-nav-dropdown">
                <Container className="eventsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-left">
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faIndustry}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Industries
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link>
                          <a href="/#" className="nav-links" role="button">
                            Healtcare
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Education
                          </a>
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faChalkboardTeacher}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Departments
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Engineering
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Marketing
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Sales
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider className="d-md-none" />
                    </Col>

                    <Col xs="12" md="6" className="text-left">
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faScaleBalanced}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Comparisons
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            vs. Census
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            vs. Segment
                          </a>
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faCheck}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Categories
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Reverse ETL
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a
                            href="/#"
                            className="nav-links text-wrap"
                            role="button"
                          >
                            Customer Data
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a
                            href="/#"
                            className="nav-links text-wrap"
                            role="button"
                          >
                            Platform
                          </a>
                        </Link>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
                <NavDropdown.Divider />

                <Container className="eventsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-left">
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faConciergeBell}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Catering
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Corporate
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Private
                          </a>
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faChalkboardTeacher}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Classes
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Barista 101
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            History of Coffee
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Intro to Cafe Snobbery
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider className="d-md-none" />
                    </Col>

                    <Col xs="12" md="6" className="text-left">
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faBuilding}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Rentals
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Fireside Room
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Roasting Room
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={faSun}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Seasonal
                      </NavDropdown.Header>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a href="/#" className="nav-links" role="button">
                            Coldbrew Night
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="/">
                          <a
                            href="/#"
                            className="nav-links text-wrap"
                            role="button"
                          >
                            Campfire Coffee Class
                          </a>
                        </Link>
                        <div
                          className="megaimage"
                          class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimage"
                        ></div>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="icons" style={{ justifyContent: "end" }}>
            <Nav style={{ gap: "0.5rem", alignItems: "center" }}>
              <a href="https://github.com/blacke4gle">
                <img src={git} alt="git"></img>
              </a>
              <a href="https://twitter.com/blacke4gle06">
                <img src={twitter} alt="git"></img>
              </a>
              <a href="https://www.linkedin.com/in/sadullah-ahmet-demir-a87028234/">
                <img src={linkedin} alt="git"></img>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigatorbar;

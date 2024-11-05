import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-secondary p-4 text-center text-white">
        <h4>Home Page</h4>
      </div>

      <Container>
        <Row>
          <Col sm={6} lg={8}>
            <p>
              the quickr fox jums over hte alzy dogthe quickr fox jums over hte
              alzy dog the quickr fox jums over hte alzy dogthe quickr fox jums
              over hte alzy dog the quickr fox jums over hte alzy dogthe quickr
              fox jums over hte alzy dog the quickr fox jums over hte alzy
              dogthe quickr fox jums over hte alzy dog the quickr fox jums over
              hte alzy dogthe quickr fox jums over hte alzy dog the quickr fox
              jums over hte alzy dogthe quickr fox jums over hte alzy dog the
              quickr fox jums over hte alzy dogthe quickr fox jums over hte alzy
              dog
            </p>
          </Col>
          <Col sm={6} lg={4}>
            <p>
              the quickr fox jums over hte alzy dogthe quickr fox jums over hte
              alzy dog the quickr fox jums over hte alzy dogthe quickr fox jums
              over hte alzy dog the quickr fox jums over hte alzy dogthe quickr
              fox jums over hte alzy dog the quickr fox jums over hte alzy
              dogthe quickr fox jums over hte alzy dog the quickr fox jums over
              hte alzy dogthe quickr fox jums over hte alzy dog the quickr fox
              jums over hte alzy dogthe quickr fox jums over hte alzy dog the
              quickr fox jums over hte alzy dogthe quickr fox jums over hte alzy
              dog
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

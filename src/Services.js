import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { Container } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export const Services = () => {
  var abc = [
    {
      cname: "Card title",
      cdes: "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      cname: "Card title",
      cdes: "This card has supporting text below as a natural lead-in to additional content.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      cname: "Card title",
      cdes: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

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
        <h4>Services page</h4>
      </div>

      <CardGroup>
        {abc.map((val) => (
          <Card>
            <Card.Img
              variant="top"
              src={val.imageUrl}
              alt={val.title}
              style={{
                width: "285px",
                height: "160px",
              }}
            />
            <Card.Body>
              <Card.Title>{val.cname}</Card.Title>
              <Card.Text>{val.cdes}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

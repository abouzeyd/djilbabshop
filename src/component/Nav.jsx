import React from 'react';
import navigator from '../data/navigation.json';
import './Nav.css';
import { Navbar, Container } from 'react-bootstrap';
const Nav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">LA SOEUR SALAFI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <navigate className="navigation">
            {navigator.map((item, index) => {
              return (
                <div style={{ marginLeft: 52 }} key={index}>
                  <a href={item.link} className="link">
                    {item.title}
                  </a>
                </div>
              );
            })}
          </navigate>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Nav;

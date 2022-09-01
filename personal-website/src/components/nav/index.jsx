import 'bootstrap/dist/css/bootstrap.min.css'

import {motion} from 'framer-motion';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavB = () => {
    return(
    <Navbar collapseOnSelect sticky="top" expand="sm" bg="dark" variant="dark">
      <Container fluid>
        <NavLink to={"/"} className="navbar-brand">
        AVM
        </NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
            <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/projects"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projects
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/skills"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Skills
            </NavLink>
            </li>
          </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};



export default NavB;
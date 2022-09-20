import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavB = (props) => {
  const {expanded, setExpanded} = props;
  // const [expanded, setExpanded] = useState(false);

    return(
    <Navbar expanded={expanded} sticky="top" expand="sm" bg="dark" variant="dark">
      <Container fluid>
        <NavLink to={"/"} onClick={() => setExpanded(false)} className="navbar-brand">
        AVM
        </NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' data-target="#navbarSupportedContent"
          onClick={() => setExpanded(!expanded)}
        />
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
            <NavLink  to={"/"} onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/projects"} onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projects
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/skills"} onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
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
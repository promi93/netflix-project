import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BiSearch, BiBell, BiUser } from "react-icons/bi";
import netflixLogo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";
import kidsIcon from "../assets/img/kids_icon.png";

function MyNav() {
  return (
    <div>
      <Navbar id="mynav" bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#">
          <img
            style={{ width: "120px" }}
            src={netflixLogo}
            alt="Netflix Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "rgb(177, 172, 172)",
                fontSize: "13px",
              }}
              href="#"
            >
              <BiSearch className="text-light mx-4" />
              KIDS
              <BiBell className="text-light mx-4" />
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  style={{ width: "30px", borderRadius: "100%" }}
                  src={avatar}
                  alt="User Avatar"
                />
              }
              id="dropdown-menu-align-center"
            >
              <NavDropdown.Item href="#">
                <img
                  style={{ width: "30px", marginRight: "10px" }}
                  src={kidsIcon}
                  alt="Kids Icon"
                />
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img
                  style={{ width: "30px", marginRight: "10px" }}
                  src={kidsIcon}
                  alt="Kids Icon"
                />
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img
                  style={{ width: "30px", marginRight: "10px" }}
                  src={kidsIcon}
                  alt="Kids Icon"
                />
                Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./profilePage.html">
                <BiUser /> Profile Setting
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ borderTop: "1px solid white" }}
                href="#"
              >
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;

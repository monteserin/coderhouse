import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ valor, children }) => {

    return (

        <div>
            <h1>{children}</h1>
            <NavBarBootstrap bg="light" expand="lg">
                <Container>
                    <NavBarBootstrap.Brand href="#home">React-Bootstrap</NavBarBootstrap.Brand>
                    <NavBarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                    <NavBarBootstrap.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavBarBootstrap.Collapse>
                </Container>
            </NavBarBootstrap>

        </div>
    )
}

export default NavBar;
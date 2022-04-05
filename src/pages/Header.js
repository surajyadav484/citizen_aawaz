import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from "../images/citizenAawaz.jpg";
import { Link } from 'components/Router';
// import  "..Pages/myStyle.css"
import "./myStyle.css"

export default function Header() {
    return (
        <div>
            <Navbar fixed="top " className = "bg-blue" variant="dark" expand="lg">
                <Navbar.Brand href="/"><img src={logo} alt="logo" style={{ height: "50px", width: "50px" }} /><span className="ml-4 font-weight-bold">सिटीजन आवाज़</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="ml-auto mr-4  ">
                       
                      
                       
                            <Link   className = "text-light text-decoration-none m-2"  to={`/`}>
                                Home
                            </Link>
                        
                        {/* <Nav.Link > */}
                            <Link className = "text-light text-decoration-none m-2" to={`/national`}>
                                National
                            </Link>
                        {/* </Nav.Link > */}
                        {/* <Nav.Link className = "nav-text" > */}
                            <Link className = "text-light text-decoration-none m-2" to={`/sport`}>
                                Sport
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link className = "nav-text" > */}
                            <Link className = "text-light text-decoration-none m-2" to={`/health`}>
                                Health
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link  className = "nav-text"> */}
                            <Link className = "text-light text-decoration-none m-2" to={`/education`}>
                                Education
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link className = "nav-text" > */}
                            <Link className = "text-light text-decoration-none m-2" to={`/crime`}>
                                Crime
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link className = "nav-text" > */}
                            <Link className = "text-light text-decoration-none m-2" to={`/entertainment`}>
                                Entertainment
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link  className = "nav-text"> */}
                            <Link className = "text-light text-decoration-none m-2" to={`/darbhanga`}>
                                Darbhanga
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link className = "nav-text"> */}
                            <Link className = "text-light text-decoration-none m-2" to={`/madhubani`}>
                                Madhubani
                            </Link>
                        {/* </Nav.Link> */}
                        {/* <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/Patna`}>
                                Patna
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/Samastipur`}>
                                Samastipur
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/Delhi`}>
                                Delhi
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/Gujrat`}>
                                Gujrat
                            </Link>
                        </Nav.Link> */}



                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link className = "text-dark text-decoration-none" to={`/patna`}>
                                    Patna
                                </Link>

                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className = "text-dark text-decoration-none" to={`/samastipur`}>
                                    Smastipur
                                </Link>

                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className = "text-dark text-decoration-none" to={`/gujrat`}>
                                    Gujrat
                                </Link>

                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className = "text-dark text-decoration-none" to={`/delhi`}>
                                    Delhi
                                </Link>

                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className = "text-dark text-decoration-none" to={`/videos`}>
                                    Videos
                                </Link>

                            </NavDropdown.Item>
                           



                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
               
            </Navbar>
        </div>
    );
}
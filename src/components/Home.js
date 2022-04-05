import { Carousel, Row, Col } from 'react-bootstrap';
import { Latest } from './Latest';
import { Trending } from './Trending';
import { Popular } from './Popular';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../images/citizenAawaz.jpg";
import { db } from "../firebase";
import {AppBar, Typography} from "@material-ui/core"
import { Header } from '../Pages/Header';
import { Footer } from './Footer';
import "../Pages/myStyle.css"
export function Home(props) {

    const [newsItem, setnewsItem] = useState([]);
    useEffect(() => {

        console.log(window.location.href);

        db.collection("news").onSnapshot((snapShot) => {
            setnewsItem(snapShot.docs.map((doc) => doc.data()))
        });




    }, [])


    return (
        <div>
           <Navbar fixed="top" bg = "dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{ height: "50px", width: "50px" }} /><span className="ml-4 font-weight-bold">सिटीजन आवाज़</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="ml-auto mr-4">
                       
                       {/* <Link to = {`/`}>
                       <Nav.Link >Home</Nav.Link>
                       </Link> */}
                        <Nav.Link className = "nav-text" >
                            <Link   className = "text-light text-decoration-none" to={`/`}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/national`}>
                                National
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/sport`}>
                                Sport
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/health`}>
                                Health
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/education`}>
                                Education
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/crime`}>
                                Crime
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/entertainment`}>
                                Entertainment
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/darbhanga`}>
                                Darbhanga
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/madhubani`}>
                                Madhubani
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link className = "text-light text-decoration-none" to={`/test`}>
                                Test
                            </Link>
                        </Nav.Link>
                        <Link className = "text-dark text-decoration-none" to={`/patna`}>
                                    Patna
                                </Link>



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
                           



                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
            <div className="home-div">
                <div className="adv-div">
                    <h1 className="text-center">Advertisement</h1>
                </div>
                <Row className="ml-auto mr-auto">
                    <Col>
                        <div>
                            <Carousel >
                                {newsItem.length > 0 && newsItem.map(({ categaory, image, headline }, index) => (
                                    index < 6 && (
                                        <Carousel.Item >
                                            <img
                                                className="d-block w-100"
                                                src={image}
                                                alt="First slide"
                                                style={{ width: "100%", height: "385px" }}
                                            />

                                            <Carousel.Caption className="carasoule-text" >
                                                <h3 ><span className="badge badge-danger"> {categaory}</span></h3>
                                                <h3 >{headline}</h3>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )

                                ))}
                            </Carousel>
                        </div>

                    </Col>
                    <Col sm xs={12}>
                        <h4><em className="text-danger">THE LATEST</em></h4>
                        {newsItem.length > 0 && newsItem.map(({ image, headline, data, pk }, index) => (
                            index < 4 && (
                                <div>
                                    <Latest image={image}
                                        headline={headline}
                                        data={data}
                                        pk={pk}
                                    />

                                </div>

                            )

                        ))}

                    </Col>
                </Row>
            </div>
            <div className="mb-5">
                <h4><em className="text-danger ml-4">TRENDING NOW</em></h4>
                <Row className="ml-auto mr-auto">
                    {newsItem.length > 0 && newsItem.map(({ image, headline }, index) => (
                        index < 12 && (
                            <div>
                                <Trending image={image}
                                    headline={headline} />
                            </div>

                        )

                    ))}
                </Row>

            </div>
            <div className="mb-5">
                <h4><em className="text-danger ml-4">POPULAR</em></h4>
                <hr className="bg-dark ml-4" />
                <Row className="ml-auto mr-auto">
                    {newsItem.length > 0 && newsItem.map(({ image, headline }, index) => (
                        index < 8 && (
                            <div>
                                <Popular image={image}
                                    headline={headline} />
                            </div>

                        )

                    ))}
                </Row>
            </div>

            <div className = "mb-4 " >
                <AppBar className = "ml-2" position="static">
                    
                        <Typography className = "ml-4" variant="h4" >
                            National
                        </Typography>
                        
                </AppBar>

            </div>
            <Footer />
        </div>
    );
}
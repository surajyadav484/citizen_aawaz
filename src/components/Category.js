import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { db } from "../firebase";
import { Helmet } from "react-helmet";
import "../Pages/myStyle.css"
import { CarouselComponent } from "./CarouselComponent";

export function Category(props) {

    const [category, setcategory] = useState([]);
    useEffect(() => {


        const path = props.location.pathname
        let category = path.substring(1);
        let categoryUpper = category.charAt(0).toUpperCase() + category.slice(1);
        db.collection("news").where("categaory", "==", categoryUpper).onSnapshot((snapShot) => {
            setcategory(snapShot.docs.map((doc) => doc.data()))
        });


    })


    return (
        <div>
            <Helmet>
                <title>category page</title>

                <meta
                    name="title"
                    content="category"
                />
                <meta
                    name="description"
                    content="this is a category page"
                />
                <meta
                    name="image"
                    content="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
                />
                <meta
                    name="image:width"
                    content="1200"
                />
                <meta
                    name="image:height"
                    content="628"
                />
            </Helmet>

            {
                category.length > 0 &&

                (
                    <div className="mb-4">
                        <Row className="ml-auto mr-auto">

                            <Col xs={12} md={4} lg={8}>

                                <div className="container ml-4" >
                                    {/* <Helmet>
                                        <title>{category[0].categaory}</title>

                                        <meta
                                            property="og:title"
                                            content={category[0].headline}
                                        />
                                        <meta
                                            property="og:descrption"
                                            content={category[0].headline}
                                        />
                                        <meta
                                            property="og:image"
                                            content={category[0].image}
                                        />
                                    </Helmet> */}
                                    <img className="content-image" src={category[0].image} alt="image" />
                                    <div className="category-text">
                                        <h3><span className="badge badge-danger text-center">{category[0].categaory} </span> </h3>
                                        <h4 >{category[0].headline} </h4>
                                    </div>

                                </div>



                            </Col>
                            {/* <Col className="ml-4 mt-4" xs lg={3} >
                                <div style={{ width: "100%", height: "300px", border: "1px solid black" }}>

                                </div>
                            </Col> */}
                        </Row>

                        <Row className="ml-auto mr-auto mt-4">
                            <div className="ml-4" style={{ width: "70%" }}>

                                <Row className="ml-auto mr-auto">

                                    {
                                        category.map(({ headline, data, image, categaory }, index) =>


                                        (
                                            index != 0 && (
                                                <div className="m-4">
                                                    {/* <Helmet>
                                                        <title>{categaory}</title>

                                                        <meta
                                                            name="title"
                                                            content={categaory}
                                                        />
                                                        <meta
                                                            name="description"
                                                            content={headline}
                                                        />
                                                        <meta
                                                            name="image"
                                                            content={image}
                                                        />
                                                    </Helmet> */}
                                                    <Card style={{ width: '400px' }}>
                                                        <Card.Img variant="top" src={image} className="card-image" />
                                                        <Card.Body>
                                                            <Card.Title> <span className="badge badge-danger"> {categaory}  </span> </Card.Title>
                                                            <Card.Text>
                                                                <strong>{headline}</strong>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </div>

                                            )

                                        )

                                        )
                                    }
                                </Row>
                            </div>
                            <div className="ml-4 mt-4" style={{ width: "300px", height: "300px", border: "1px solid black" }} >
                                <h1>Advertisement</h1>
                            </div>
                        </Row>


                    </div>
                )


            }
        </div>
    );
}
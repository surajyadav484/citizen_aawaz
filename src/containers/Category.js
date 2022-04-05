import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import DisplayCategory from '../components/DisplayCategory'
import PrimaryComponent from '../components/PrimaryComponent'
import BackToTopButton from '../components/BackToTopButton'
import { Row, Col, Card } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'

export default function Category() {
    const { data } = useRouteData();

    return (
        <div>
            <title>  Citizen Aawaz - Latest News, Breaking News, Bollywood, Sports, Business and Political News</title>
            <link rel="shortcut icon"
                href="https://example.com/myicon.ico"></link>
            <BackToTopButton />
            <div className="mt-70 category-card-conatiner-primary ">
                <Row>
                    <Col >
                        <div className="home-main-div">
                            {
                                data.map((post, index) => (
                                    index < 1 && (
                                        <PrimaryComponent categaory={post.categaory}
                                            image={post.image}
                                            pk={post.pk}
                                            headline={post.headline}
                                        />
                                    )


                                ))
                            }
                        </div>
                    </Col >
                    <Col sm xs={12}>
                        {/* <div className="text-center" style={{ width: "100%", height: "100%", border: "1px solid black" }}>
                            Advertisement
                        </div> */}
                    </Col>
                </Row>
            </div>
            <div className = "category-card-conatiner">
                <Row className = "ml-0 mr-0">
                   
                    {data.map((post, index) =>
                    (
                        (index >= 1) &&
                        (
                            <Link to={`/post/${post.pk}`}>
                                <Card  className="mobile-card-view" >
                                    <Card.Img src={post.image} alt="image" className="card-image" />
                                    <Card.Body>
                                        <Card.Text>
                                            <strong><a href="#" className="text-dark">{post.headline}</a> </strong>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        )
                    ))}
                    
                </Row>
            </div>

        </div>
    );
}

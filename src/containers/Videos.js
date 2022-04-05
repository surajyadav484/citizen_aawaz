import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useRouteData } from 'react-static';
import SeconadaryIframe from '../components/SecondaryIframe';
export default function Videos() {

    const { videoPosts } = useRouteData();

    return (
        <div>
            <div className="mt-70">
                <Row>
                    <Col >
                        <div className="home-main-div">
                            {
                                videoPosts.map((video, index) => (
                                    index < 1 && (
                                        <div>
                                            <iframe width="100%" height="400px"
                                            name = "iframe_a"
                                            autoplay= "1"
                                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0`}>
                                            </iframe>
                                            {/* <h1>{video.text}</h1> */}
                                        </div>
                                    )


                                ))
                            }
                        </div>
                    </Col >
                    <Col sm xs={12}>

                        <div className="scroller">
                            {videoPosts.map((video, index) =>
                            (
                                (index >= 1) &&
                                (

                                    <div>
                                    <SeconadaryIframe id={video.id}
                                    target = {"iframe_a"}
                                      pk={video.pk}
                                      text={video.text}
                                    />
                                  </div>


                                )
                            ))}

                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{ width: "75%" }}>
                <Row>

                </Row>
            </div>

        </div>
    );
}
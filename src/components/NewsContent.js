import React, { useEffect, useState } from "react"
import { db } from "../firebase";
import { Row, Col } from "react-bootstrap";
import { WhatsappShareButton, WhatsappIcon } from "react-share"
import { Helmet } from "react-helmet";

import "../Pages/myStyle.css"

export function NewsContent(props) {

    const [newsItem, setnewsItem] = useState([]);
    useEffect(() => {
        console.log(window.location.href);

        let pk = parseInt(props.match.params.pk);

        db.collection("news").where("pk", "==", pk).onSnapshot((snapShot) => {
            setnewsItem(snapShot.docs.map((doc) => doc.data()))
        });


    }, [])

    return (
        <div>
            <Helmet>

                <title>NewsContent</title>
                <meta name="title" content="NewsContent" />
                <meta name="description" content="this is a NewsContent page" />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://citizenaawaz.netlify.app/test" />
                <meta property="og:title" content="NewsContent" />
                <meta property="og:description" content="this is a testing page" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/citizenawz.appspot.com/o/images%2FIMG-20210102-WA0042.jpg?alt=media&token=b0b38350-c301-494f-8b63-a34630f6c7a9" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://citizenaawaz.netlify.app/test" />
                <meta property="twitter:title" content="NewsContent" />
                <meta property="twitter:description" content="this is a testing page" />
                <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/citizenawz.appspot.com/o/images%2FIMG-20210102-WA0042.jpg?alt=media&token=b0b38350-c301-494f-8b63-a34630f6c7a9" />

            </Helmet>
            <div>

                <WhatsappShareButton
                    url={window.location.href}
                    quote="pls subscribe"
                >
                    <WhatsappIcon logoFillColor="white" round={true} ></WhatsappIcon>
                </WhatsappShareButton>

            </div>
            {
                newsItem.map(({ headline, image, data, categaory }) =>
                (

                    <div className="mb-4">

                        <Row className="ml-auto mr-auto">

                            <Col xs={12} lg={8}>
                                <div className="ml-4 mb-4  content-div" >

                                    <h1 className="m-4">{headline}</h1>

                                    <img className="content-image m-4" src={image} alt="image" />
                                    <div className="ml-4"><span className="badge badge-dark">{categaory}</span></div>
                                    <p className="m-4">{data}</p>
                                </div>
                            </Col>
                            <Col className="ml-4" xs lg={3} >
                                <div style={{ width: "100%", height: "300px", border: "1px solid black" }}>

                                </div>
                            </Col>
                        </Row>
                    </div>
                )
                )
            }
        </div>
    );




}
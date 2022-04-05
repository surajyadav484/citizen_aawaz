// import React from 'react'

// export default () => (
//   <div style={{ textAlign: 'center' }}>
//     <h1>Welcome to React-Static</h1>
//   </div>
// )

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'components/Router';
import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { useRouteData } from 'react-static';
import PrimaryComponent from "../components/PrimaryComponent";
import SeconadaryIframe from '../components/SecondaryIframe';
import SecondaryComponent from "../components/SecondayComponent";


export default () => {
  const { posts, videoPosts } = useRouteData();

  let nationalPosts = posts.filter((post) => {
    return post.categaory == "National";
  })
  let sportPosts = posts.filter((post) => {
    return post.categaory == "Sport";
  })
  let crimePosts = posts.filter((post) => {
    return post.categaory == "Crime";
  })
  let entertainmentPosts = posts.filter((post) => {
    return post.categaory == "Entertainment";
  })
  let healthPosts = posts.filter((post) => {
    return post.categaory == "Health";
  })
  let darbhangaPosts = posts.filter((post) => {
    return post.categaory == "Darbhanga";
  })
  let patnaPosts = posts.filter((post) => {
    return post.categaory == "Patna";
  })
  let madhubaniPosts = posts.filter((post) => {
    return post.categaory == "Madhubani";
  })
  let samastipurPosts = posts.filter((post) => {
    return post.categaory == "Samastipur";
  })
  let gujratPosts = posts.filter((post) => {
    return post.categaory == "Gujrat";
  })
  let delhiPosts = posts.filter((post) => {
    return post.categaory == "Delhi";
  })


  return (
    <div className = "home-content" >
      <Helmet>
        <title>  Citizen Aawaz - Latest News, Breaking News, Bollywood, Sports, Business and Political News</title>
      </Helmet>
      {/* <BackToTopButton /> */}

      

      <div className="bgColor  mt-70">
        <h4 className = "headline-font">LATEST</h4>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {posts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {posts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>
      <div className="bgColor   mt-4">

        <h4 className = "headline-font" >TRENDING</h4>
        <hr className="bg-dark" />
        <Row  className = "ml-0 mr-0">
          <div className="horizontal-snap">
            {
              posts.map((post, index) => (
                index < 20 && (

                  <div className="div-body  text-center  bg-white">
                    <Link to={`/post/${post.pk}`}>
                      <img className="m-2" src={post.image} />
                      <div className="mt-4 text-dark font-weight-bold">{post.headline} </div>
                    </Link>
                  </div>
                )
              ))
            }
          </div>
        </Row>
      </div>

      {/* =========================National===================== */}

      <div className="bgColor mt-4 ">

        <div><span className=" header-font">National</span><Link to={`/national`} className="float-right text-primary">View more {`>>`}</Link></div>



        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {nationalPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            
            {nationalPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
           
          </Col>
        </Row>
      </div>

      {/* =========================videos=================== */}

      <div className="bgColor mt-4 ">

        <div><span className=" header-font">Videos</span><Link to={`/videos`} className="float-right text-primary">View more {`>>`}</Link></div>



        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {videoPosts.map((video, index) =>
              (
                (index < 1) &&
                (
                  <iframe width="100%" height="400px"
                  name = "iframe-primary"
                    src={`https://www.youtube.com/embed/${video.id}`} allowfullscreen>
                  </iframe>
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
          <div className="scroller">
            {videoPosts.map((video, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <div>
                  <SeconadaryIframe id={video.id}
                  target = {"iframe-primary"}
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



      {/* =========================Sport===================== */}

      <div className="bgColor mt-4 ">
        <div><span className=" header-font">Sport</span><Link to={`/sport`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {sportPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {sportPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>


      {/* =========================Health===================== */}

      <div className="bgColor mt-4 ">
        <div><span className=" header-font">Health</span><Link to={`/health`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {healthPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {healthPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Crime===================== */}

      <div className="bgColor mt-4 ">
        <div><span className=" header-font">Crime</span><Link to={`/crime`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {crimePosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {crimePosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>


      {/* =========================Entertainment===================== */}

      <div className="bgColor mt-4 ">
        <div><span className=" header-font">Entertainment</span><Link to={`/entertainment`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {entertainmentPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {entertainmentPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Darbhanga===================== */}

      <div className="bgColor mt-4 ">
        <div><span className="header-font">darbhanga</span><Link to={`/darbhanga`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {darbhangaPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {darbhangaPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Patna===================== */}

      <div className="bgColor mt-4 ">
        <div><span className=" header-font">Patna</span><Link to={`/patna`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {patnaPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {patnaPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Madhubani===================== */}

      <div className="bgColor mt-4 ">
        <div><span className="header-font">Madhubani</span><Link to={`/madhubani`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {madhubaniPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {madhubaniPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Samastipur===================== */}

      <div className="bgColor mt-4 ">
        <div><span className="header-font">Samastipur</span><Link to={`/samastipur`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {samastipurPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {samastipurPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Gujrat===================== */}

      <div className="bgColor mt-4 ">
        <div><span className="header-font">Gujrat</span><Link to={`/gujrat`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {gujratPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {gujratPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>

      {/* =========================Delhi===================== */}

      <div className="bgColor mt-4 ">
        <div><span className="header-font">Delhi</span><Link to={`/delhi`} className="float-right text-primary">View more {`>>`}</Link></div>
        <hr className="bg-dark" />
        <Row className = "ml-0 mr-0">
          <Col >
            <div className="home-main-div">
              {delhiPosts.map((post, index) =>
              (
                (index < 1) &&
                (
                  <PrimaryComponent pk={post.pk}
                    image={post.image}
                    headline={post.headline}
                    categaory={post.categaory}
                  />
                )
              ))}
            </div>
          </Col>
          <Col sm xs={12}>
            {delhiPosts.map((post, index) =>
            (
              (index >= 1 && index < 5) &&
              (
                <SecondaryComponent
                  pk={post.pk}
                  image={post.image}
                  headline={post.headline}
                />
              )
            ))}
          </Col>
        </Row>
      </div>



    </div>
  )
}


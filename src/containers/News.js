import React from 'react'
import { Helmet } from 'react-helmet'
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"
import { useRouteData } from 'react-static'
import BackToTopButton from '../components/BackToTopButton'
import facebook from "../images/facebook.svg"
import whatsapp from "../images/whatsapp.svg"
import twitter from "../images/twitter.svg"

export default function News() {
    const { post } = useRouteData();
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var date = new Date(`${post.date}`);


    const publishDate = date.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

    return (
        <div>
            <Helmet>
                <title> Citizen Aawaz - Latest News, Breaking News, Bollywood, Sports, Business and Political News</title>
                <meta name="title" content={post.headline} />
                <meta name="description" content={post.headline} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://citizenaawaz.netlify.app/test" />
                <meta property="og:title" content={post.headline} />
                <meta property="og:description" content={post.data} />
                <meta property="og:image" content={post.image} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://citizenaawaz.netlify.app/test" />
                <meta property="twitter:title" content={post.headline} />
                <meta property="twitter:description" content={post.headline} />
                <meta property="twitter:image" content={post.image} />

            </Helmet>
            <BackToTopButton />
            <div className="news-main-div mt-70 ">
                {/* <Link className = "text-primary" to="/" >{'<'} Back</Link> */}

                <h1><b>{post.headline}</b></h1>

                <img src={post.image} />
                <div className="share-btn">
                    <WhatsappShareButton

                        className="m-2"
                        url = {`https://citizenaawaz-v-2.netlify.app/post/${post.pk}`}
                        quote="pls subscribe"
                    >
                        <WhatsappIcon style={{ width: "50px", height: "50px" }} logoFillColor="white" round={true} ></WhatsappIcon>
                    </WhatsappShareButton>
                    <FacebookShareButton
                        className="m-2"
                        url = {`https://citizenaawaz-v-2.netlify.app/post/${post.pk}`}
                        quote="pls subscribe"
                        onClick = "window.open()"
                    >
                        <FacebookIcon style={{ width: "50px", height: "50px" }} logoFillColor="white" round={true} ></FacebookIcon>
                    </FacebookShareButton>

                    <TwitterShareButton
                        className="m-2"
                        url = {`https://citizenaawaz-v-2.netlify.app/post/${post.pk}`}
                        quote="pls subscribe"
                    >
                        <TwitterIcon style={{ width: "50px", height: "50px" }} logoFillColor="white" round={true} ></TwitterIcon>
                    </TwitterShareButton>
                    <TelegramShareButton
                        className="m-2"
                        url = {`https://citizenaawaz-v-2.netlify.app/post/${post.pk}`}
                        quote="pls subscribe"
                    >
                        <TelegramIcon style={{ width: "50px", height: "50px" }} logoFillColor="white" round={true} ></TelegramIcon>
                    </TelegramShareButton>
                </div>
                <p><b>{publishDate}</b></p>
                <div className="news-content">{post.data}  </div>
            </div>

        </div>
    )
}

import React from "react"
import { Row,Col } from "react-bootstrap";
import logo from "../images/citizenAawaz.jpg";
import fbImage from "../images/fb-image.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

export default function FooterComponent(){
    return(
        <div className = "mt-4">
           
           <div className = "bg-dark">
            <Row className = "ml-auto mr-auto"  >
                <Col >
                <div className = "ml-4">
                <div>
                    <img src = {logo} alt = "logo" className = "logo mt-4" />
                </div>
                <div>
                    <h2 className = "white-color mt-4 font-weight-bold">सिटीजन आवाज़</h2>
                </div>

                <div className = "mt-4">
                    <p className = "text-light">
                    सिटीजन आवाज़ राष्ट्रीय हिंदी समाचार पत्र का वेब वर्जन वेब न्यूज़ पोर्टल है । जिसमें आपके हर एक समस्या को मीडिया के माध्यम से सरकार तक पहुंचाना हमारी प्राथमिकता । कोशिश है आपकी सरल भाषा में, आपके लिए सरल भाषा मे खबर । ऐसा मंच जो आपकी आवाज़ उठाने के लिए निरंतर बीते पाँच वर्षो से कार्यरत । यहां पाएंगे ताज़ातरीन खबरों से लेकर नौकरी, शिक्षा और नए एक्सक्लूसिव जनहित खबर । खेल, सिनेमा और विदेश की खबर साफ सुथरे तरीकों मे । एक्सक्लूसिव इंटरव्यू प्रशासनिक अधिकारी एवं जनप्रतिनिधि के साथ जनता के सवालो को लेकर । www.citizenawaaz.com का संपूर्ण स्वामित्व सिटीजन आवाज़ समाचार पत्र के संस्थापक संपादक पंकज कुमार झा के पास है । www.citizenawaaz.com पर प्रकाशित सभी सामग्री सर्वाधिकार सुरक्षित है और इसकी किसी भी सामग्री का किसी भी रूप में पुन:प्रकाशन अथवा वितरण प्रतिबंधित है ।
                    </p>
                    <p className = "text-light mt-4 mb-4 font-weight-bold">Contact us +91 9431459485</p>
                    <p className = "text-light  font-weight-bold">Email : citizenawazindia@gmail.com</p>
                </div>
                </div>
                
                </Col>
                <Col>
                <div className = "ml-5" style = {{marginTop : "30%"}}>
                <img className = "social-image" src = {fbImage} alt = "fb image"/>
                <img className = "social-image" src = {insta} alt = "instagram image"/>
                <img className = "social-image" src = {youtube} alt = "youtube image"/>
                <img className = "social-image" src = {twitter} alt = "twitter image"/>
                </div>
                </Col>
            </Row>
            <hr style = {{backgroundColor : "white"}} />
            <div className = "mt-5">
            <div className = "ml-auto mr-auto text-center" >
                <p className = "text-light">Copyright © 2015 by Citizenawaaz All rights reserved</p>
            </div>
            </div>
            </div>

        </div>
    );
}
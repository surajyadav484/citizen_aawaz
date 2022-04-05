import { Card, CardDeck, Button, Row, Col } from "react-bootstrap";
import logo from "../images/citizenAawaz.jpg";
import React, { useState, useEffect } from 'react';
import "../Pages/myStyle.css"
// import firebase from "../firebase";

import { db } from "../firebase";
export function Trending(props) {
    return (
        <div>
            <div className = "ml-2">
                <Card style={{ width: '18rem' }} className="m-4" >
                    <Card.Img src={props.image} alt="image" className = "card-image" />
                    <Card.Body>
                        <Card.Text>
                        <strong><a href = "#" className = "text-dark">{props.headline}</a> </strong>   
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
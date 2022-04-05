import { Card, Button, Row, Col } from "react-bootstrap";
import logo from "../images/citizenAawaz.jpg";
import "../Pages/myStyle.css"

export function Popular(props){
    return(
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
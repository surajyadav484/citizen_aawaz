import { Card, Button, Row, Col, Table } from "react-bootstrap";

import { Link } from "react-router-dom";
import "../Pages/myStyle.css"

export function Latest(props) {
    return (
        <>
            <div >
                <Table>
                    <tr>
                        <td className = "m-0 p-0">
                            <img src={props.image} alt="image" className="social-image m-0 p-0 pt-2"></img>
                        </td>
                        <td>
                            <p><strong><Link to = {`/NewsContent/${props.pk}`} className = "text-dark">{props.headline}</Link></strong></p>
                        </td>
                    </tr>

                </Table>



            </div>
        </>
    );
}
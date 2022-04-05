import React from "react"
import { Link } from 'components/Router'
import { Table, Card, Row, Col } from 'react-bootstrap';
import { useRouteData } from 'react-static'
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SecondaryComponent(props) {
  return (
    <div className = "mt-2" >
      <Table className="m-0 p-0">
        <tr className="m-0 p-0">
          <Link to={`/post/${props.pk}`}>
            <td className = "m-0 p-0" >
              <img  src={props.image} alt="image" className="rectangular-image m-0 p-0"></img>
            </td>
            <td>
              <p><strong className="text-dark text-decoration-none" >{props.headline}</strong></p>
            </td>
          </Link>
        </tr>

      </Table>
    </div>
  );
}
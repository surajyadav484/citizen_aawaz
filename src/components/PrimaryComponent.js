
import React from "react"
import { Link } from 'components/Router'
import { Table, Card, Row, Col } from 'react-bootstrap';
import { useRouteData } from 'react-static'
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PrimaryComponent(props){
    return(
        <div className="box-div-parent" >
                    <Link to={`/post/${props.pk}`}>
                      <img src={props.image} />
                      <div className="box-div">
                        <p className="box-div"> <span className="badge badge-danger mb-2">{props.categaory}</span> <br /> {props.headline}  </p>

                      </div>
                    </Link>
                  </div>
    );
}

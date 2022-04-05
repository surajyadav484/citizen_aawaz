
import { Link } from 'components/Router';
import React from 'react';


export default function DisplayCategory(props) {

    return (
        <ul>
            <div>
                <h3>{props.categaory} </h3>
                <Link to={`/post/${props.pk}`}>
                    {props.headline}
                </Link>

            </div>
        </ul>
    );
}

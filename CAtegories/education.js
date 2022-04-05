import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import DisplayCategory from '../src/components/DisplayCategory'

export default function Education() {
    const { data } = useRouteData();

    return (


        <div>
            {
                data.map((post) => (
                    <DisplayCategory categaory = {post.categaory}
                    pk = {post.pk}
                    headline = {post.headline}
                    />

                ))
            }
        </div>
    );
}

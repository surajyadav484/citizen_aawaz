import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import DisplayCategory from '../components/DisplayCategory'

export default function National() {
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

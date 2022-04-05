import React from 'react';
import { useRouteData } from 'react-static';
import FooterComponent from '../components/FooterComponent';
export default function VideoComponent() {
    const { video } = useRouteData();

    return (
        <div className="mt-100">
        
            <div className="bgColor">
                <iframe
                    width="100%"
                    height="530px"
                    src={`https://www.youtube.com/embed/${video.id}`}

                />
                <h1>{video.text}</h1>
            </div>

        </div>
    );
}
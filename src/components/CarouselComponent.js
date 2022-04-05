import { Carousel,  } from "react-bootstrap";

export function CarouselComponent(props) {
  return (
    <div>
      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
     
    </div>
  );
}
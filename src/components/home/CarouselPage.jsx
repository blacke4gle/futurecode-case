import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/image1.jpeg";
import img2 from "../../images/image2.jpeg";
import img3 from "../../images/image3.jpeg";
import "./CarouselPage.css";

function CarouselPage() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100 img-fluid"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First</h5>
            <p>Consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100 img-fluid"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100 img-fluid"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;

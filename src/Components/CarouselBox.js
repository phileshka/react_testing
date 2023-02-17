import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import city from "../assets/city.jpeg";
import wall from "../assets/wall.jpeg";
import people from "../assets/people.jpeg";
import underground from "../assets/underground.jpeg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={city} alt="City"></img>
          <Carousel.Caption>
            <h3>City image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={wall} alt="Wall"></img>
          <Carousel.Caption>
            <h3>Wall image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={people} alt="People"></img>
          <Carousel.Caption>
            <h3>People image</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={underground}
            alt="Underground"
          ></img>
          <Carousel.Caption>
            <h3>Underground image</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

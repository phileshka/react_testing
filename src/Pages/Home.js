import React, { Component } from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center mr-4">Our team</h2>
          <CardGroup className="mr-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card text="primary">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="top"
                src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}

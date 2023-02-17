import React, { Component } from "react";
import { Media, Container, Col, Row, ListGroup, Card } from "react-bootstrap";
export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div class="d-flex align-items-center mt-3">
              <div class="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Blog post</h5>
                <p>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center mt-3">
              <div class="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Blog post</h5>
                <p>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center mt-3">
              <div class="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Blog post</h5>
                <p>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center mt-3">
              <div class="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  <h5>Blog post</h5>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </p>
              </div>
            </div>
            {/* <Media className="mr-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png"
              ></img>
              <Media.Body>
                <h5>Blog post</h5>
                <p>LOremmmm</p>
              </Media.Body>
            </Media> */}
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>C#</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Это какой-то контент из медиа-компонента. Вы можете заменить
                  его любым содержимым и при необходимости отрегулировать его.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

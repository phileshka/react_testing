import React, { Component } from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://shridaddy.com/wp-content/uploads/2021/09/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg"></img>
                  <p>
                    Enim ut sem viverra aliquet eget sit amet tellus cras
                    adipiscing enim eu turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum lectus mauris ultrices
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://www.wellable.co/blog/wp-content/uploads/2022/08/Team-Names-For-Wellness-Challenges-1.png"></img>
                  <p>
                    Enim ut sem viverra aliquet eget sit amet tellus cras
                    adipiscing enim eu turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum lectus mauris ultrices
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png"></img>
                  <p>
                    Enim ut sem viverra aliquet eget sit amet tellus cras
                    adipiscing enim eu turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum lectus mauris ultrices
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://www.moweb.com/uploads/blogs/original/262872155Top_Web_Development_Frameworks.png"></img>
                  <p>
                    Enim ut sem viverra aliquet eget sit amet tellus cras
                    adipiscing enim eu turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum lectus mauris ultrices
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://miro.medium.com/max/1200/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg"></img>
                  <p>
                    Enim ut sem viverra aliquet eget sit amet tellus cras
                    adipiscing enim eu turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum lectus mauris ultrices
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

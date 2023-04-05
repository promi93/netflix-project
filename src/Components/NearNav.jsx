import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { BsGrid, BsJustifyLeft } from "react-icons/bs";
const TVShowsHeader = () => {
  return (
    <Container fluid>
      <Row className="d-flex align-items-center text-white">
        <Col xs={3}>
          <h1 style={{ width: "100%" }}>TV Shows</h1>
        </Col>
        <Col xs={6}>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="rounded-0 text-white border-light w-25"
              style={{ marginRight: "100%" }}
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Thriller</Dropdown.Item>
              <Dropdown.Item>Comedy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={3} className="d-flex justify-content-end">
          <div className="d-flex">
            <div className="px-2 border border-secondary text-secondary">
              <BsJustifyLeft />
            </div>
            <div className="px-2 border border-secondary text-secondary">
              <BsGrid />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TVShowsHeader;

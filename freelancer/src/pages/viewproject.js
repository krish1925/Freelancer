import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "../component/navbar";

function ViewProjects() {
  const projects = [
    {
      id: 1,
      clientName: "Client A",
      providerName: "Provider X",
      cost: "$1000",
      bidAmount: "$800",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      language: "English",
    },
    {
      id: 2,
      clientName: "Client B",
      providerName: "Provider Y",
      cost: "$2000",
      bidAmount: "$1500",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      language: "Spanish",
    },
    // Add more projects here
  ];

  return (
    <div>
      <p1>HIIII</p1>
      <Nav />
    <Container>

      <Row className="mt-4">
        {projects.map((project) => (
          <Col key={project.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.clientName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Provider: {project.providerName}</Card.Subtitle>
                <Card.Text>Cost: {project.cost}</Card.Text>
                <Card.Text>Bid Amount: {project.bidAmount}</Card.Text>
                <Card.Text>Description: {project.description}</Card.Text>
                <Card.Text>Language: {project.language}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default ViewProjects;

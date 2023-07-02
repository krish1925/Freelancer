import React, { useState } from "react";
import Nav from "../component/navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Dashboard() {
  const [fullName, setFullName] = useState("");
  const [skills, setSkills] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Rest of your component code

  return (
    <div>
      <Nav />
      <Container>
        <Row className="mt-4">
          <Col md={8}>
            <h1>Welcome to Your Freelancer Dashboard</h1>
            <Card className="mt-4">
              <Card.Body>
                <h2>Latest Projects</h2>
                <p>You have 5 active projects.</p>
                <ul>
                  <li>Project 1</li>
                  <li>Project 2</li>
                  <li>Project 3</li>
                  <li>Project 4</li>
                  <li>Project 5</li>
                </ul>
                <Button href = 'viewprojects' variant="primary">View All Projects</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h2>Notifications</h2>
                <ul>
                  <li>New message from Client A</li>
                  <li>Payment received for Project B</li>
                  <li>Project C deadline approaching</li>
                </ul>
                <Button variant="secondary">View All Notifications</Button>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Body>
                <h2>Account Details</h2>
                <p>Name: {fullName}</p>
                <p>Email: {email}</p>
                <p>Account Type: Freelancer</p>
                <Button variant="info">Edit Account</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

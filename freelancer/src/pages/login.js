import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log("Login:", email, password);
    alert("Login Successful!");

    // Redirect to /dashboard with the user type as a URL parameter
    navigate("/dashboard?userType=" + (isRegistered ? "registered" : "guest"));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform register logic here
    console.log("Register:", email, password);
    // Redirect to /register
    navigate("/register");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4">{isRegistered ? "Registered User" : "Login User"}</h1>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            {isRegistered ? (
              <Button variant="primary" type="submit" onClick={handleLogin} block>
                Login
              </Button>
            ) : (
              <Button variant="primary" type="submit" onClick={handleLogin} block>
                Register
              </Button>
            )}
          </Form>
          <p className="text-center mt-3">
            {isRegistered ? "Already have an account? " : "Don't have an account? "}
            <Link to="/register">{isRegistered ? "Login" : "Register"}</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

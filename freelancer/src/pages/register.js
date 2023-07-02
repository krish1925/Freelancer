import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Register() {
  const [fullName, setFullName] = useState("");
  const [skills, setSkills] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform register logic here
    console.log("Register:", fullName, skills, dateOfBirth, email, phoneNumber);
    alert("Registration Successful!");
  };

  return (
    <Container>
      <h1>Register User</h1>
      <Form>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control type="text" value={fullName} onChange={handleFullNameChange} />
        </Form.Group>
        <Form.Group controlId="formSkills">
          <Form.Label>Skills:</Form.Label>
          <Form.Control as="textarea" rows={3} value={skills} onChange={handleSkillsChange} />
        </Form.Group>
        <Form.Group controlId="formDateOfBirth">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;

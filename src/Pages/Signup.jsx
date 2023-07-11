import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !password) {
      setShowAlert(true);
      return;
    }

    // Log form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Perform signup logic here
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Please fill in all the required fields.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          className="bg-dark text-white mt-3"
          variant="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;

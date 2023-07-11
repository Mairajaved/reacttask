import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !password) {
      setShowAlert(true);
      return;
    }

    // Log user data to the console
    console.log("User Email:", email);
    console.log("User Password:", password);

    // Perform login logic here
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Please fill in all the required fields.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
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
            placeholder="Password"
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
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

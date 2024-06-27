import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:7000/api/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 201) {
          alert(response, "jnjknjdckdsnKJ")
          console.log("User registered successfully");
          navigate("/login");
        } else {
          console.log("Error registering user:", await response.text());
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }
    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (data.password !== data.cpassword) {
      errors.cpassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#80060c",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col span={12} sm={6} style={{ width: "350px" }}>
            <div className="shadow-lg bg-white rounded-3 p-3">
              <h2 className="text-center">Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="cpassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="cpassword"
                    value={formData.cpassword}
                    onChange={handleChange}
                    isInvalid={!!errors.cpassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cpassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex justify-content-center mt-3">
                  <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

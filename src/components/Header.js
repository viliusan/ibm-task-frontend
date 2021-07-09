import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, FormControl } from "react-bootstrap";
import { sendUserAction } from "../requests/userActions";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles/Header.scss";

const searchQueryValidator = /^[a-zA-Z0-9 ]*$/;

const Header = () => {
  const [formData, updateFormData] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const validateSearch = (e) => {
    const query = e.target.value;
    if (searchQueryValidator.test(query)) {
      setIsValid(true);
      setMessage("");
    } else {
      setIsValid(false);
      setMessage("Alphanumeric and space characters allowed only");
    }
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
    validateSearch(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      sendUserAction(formData);
      history.push(`/search/${formData.searchQuery}`);
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">GNews Articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/topic/world">World</NavDropdown.Item>
              <NavDropdown.Item href="/topic/nation">Nation</NavDropdown.Item>
              <NavDropdown.Item href="/topic/business">
                Business
              </NavDropdown.Item>
              <NavDropdown.Item href="/topic/technology">
                Technology
              </NavDropdown.Item>
              <NavDropdown.Item href="/topic/entertainemnt">
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item href="/topic/sports">
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item href="/topic/science">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item href="/topic/health">
                Health
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <Form.Control.Feedback className="queryFeedback" type="error">
              {message}
            </Form.Control.Feedback>
            <FormControl
              type="text"
              placeholder="Article Search"
              className="mr-sm-2"
              onChange={handleChange}
              name="searchQuery"
              maxLength="40"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

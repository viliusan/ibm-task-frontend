import React from "react";
import Button from "react-bootstrap/Button";
import { Form, FormControl } from "react-bootstrap";
import { sendUserAction } from "../requests/userActions";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../stylesheets/Header.css";

const searchQueryValidator = /^[a-zA-Z0-9 ]*$/;

const Header = () => {
  const [formData, updateFormData] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);
  const [message, setMessage] = React.useState("");

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
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
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

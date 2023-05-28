import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
// import sortByStatus from "./sortByStatus";
// import sortByDepartment from "./sortByDepartment";
// import sortbyPriority from "./sortbyPriority";


function NavbarAgeHome(props) {
  const [statusData, setstatusData] = useState("");
  const [priorityData, setpriorityData] = useState("");
  const [depData, setdepData] = useState("");


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="#">Agent Side</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/allAgentTickets">Agent Tickets</Nav.Link>
              <Nav.Link href="/allCustomersTickets">Customers Tikets</Nav.Link>

              <NavDropdown title="Sorting Tikets By Status" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/sortAgTicketByStatus" setStatusData = "1">Open Status</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByStatus" setStatusData = "2">Closed Status</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Sorting Tikets By Priority" id="navbarScrollingDropdown-2">
                <NavDropdown.Item href="/sortAgTicketByPriority" setpriorityData = "high">High</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByPriority" setpriorityData = "medium">Medium</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByPriority" setpriorityData = "low">Low</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Sorting Tikets By Department" id="navbarScrollingDropdown-3">
                <NavDropdown.Item href="/sortAgTicketByPriority" setdepData = "1" >Finance</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByPriority" setdepData = "2">Marketing</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByPriority" setdepData = "3">Development</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Form className="d-flex" style={{marginRight:'2px'}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-warning ">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <sortByStatus statusData={statusData} />
      <sortbyPriority priorityData={priorityData} />
      <sortByDepartment depData={depData} />

    </>
  )
}

export default NavbarAgeHome;

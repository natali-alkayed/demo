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
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">Tiket Ease</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/allAgentTickets">Agent Tickets</Nav.Link>
              <Nav.Link href="/allCustomersTickets">Customers Tikets</Nav.Link>

             
           </Nav>
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

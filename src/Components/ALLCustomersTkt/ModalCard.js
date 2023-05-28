import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import './ModalCard.css';




function ModalCard(props) {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            
            agesubject: e.target.agesubject.value,
            agentdescription: e.target.agentdescription.value,
            agepriority: e.target.agepriority.value,
            departmentid: e.target.departmentid.value,
            customerticketid: props.item.customerticketid,
        }
        
        const serverURL = `${process.env.REACT_APP_SERVER_URL}/creatAgentTicket/${props.item.customerticketid}`
        const axiosRes = await axios.post(serverURL, obj);
        const serverURL2 = `${process.env.REACT_APP_SERVER_URL}/updateAgentStatus/${props.item.customerticketid}`
        const axiosRes2 = await axios.patch(serverURL2);
        props.handleclose();
        const serverURL3 = `${process.env.REACT_APP_SERVER_URL}/allCustomersTickets`
        const axiosRes3 = await axios.get(serverURL3);
        props.takeNewArrFromChild(axiosRes3.data);
    }
    return (
        <>

        
            <Modal show={props.showFlag} onHide={props.handleclose} tabindex="-1">
                <Modal.Header closeButton>
                    <Modal.Title>Create Agent Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Problem title</Form.Label>
                            <Form.Control
                                name="agesubject"
                                type="text"
                                defaultValue={props.item.agesubject}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Problem Describtion</Form.Label>
                            <Form.Control
                                name="agentdescription"
                                type="text"
                                defaultValue={props.item.agentdescription}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Priority</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="agepriority"
                                //  defaultValue={props.item.agepriority}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Department</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="departmentid"
                                    defaultValue={props.item.departmentid}
                                />
                            </InputGroup>
                        </Form.Group>


                        <Button type="submit">Submit form</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleclose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCard;

//////////////////////////////////////////////////////////////////


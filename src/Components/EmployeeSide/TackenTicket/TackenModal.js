import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function TackenModal(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            employeecomment: e.target.employeecomment.value
        }
        const serverURL = `${process.env.REACT_APP_SERVER_URL}/addCommentByEmployee/${props.item.agentticketid}`
        const axiosRes = await axios.patch(serverURL,obj);
        props.handleclose();
        console.log(obj);

        const serverURL3 = `${process.env.REACT_APP_SERVER_URL}/allAssignTicketByEmployee`
        const axiosRes3 = await axios.get(serverURL3);
        props.takeNewArrFromChild(axiosRes3.data);
    
    }
    //  console.log(props.item.employeeid);
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose} tabindex="-1">
                <Modal.Header closeButton>
                    <Modal.Title>Employee Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group>
                            <Form.Label>Agent Subject</Form.Label>
                            <Form.Control
                                name="agesubject"
                                type="text"
                                defaultValue={props.item.agesubject}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Agent Describtion</Form.Label>
                            <Form.Control
                                name="agentdescription"
                                type="text"
                                defaultValue={props.item.agentdescription}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                name="agepriority"
                                type="text"
                                defaultValue={props.item.agepriority}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Your Comment</Form.Label>
                            <Form.Control
                                name="employeecomment"
                                type="text"
                              //  defaultValue={props.item.employeecomment}
                                
                            />
                        </Form.Group>
                    
                        <Button type="submit">Send Comment</Button>
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
export default TackenModal;









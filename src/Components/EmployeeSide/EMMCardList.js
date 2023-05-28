import EMMCards from './EMMCards';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardList(props) {

    const takeNewArr = (newarr) => {
        props.takeNewArrFromAgentCardsPage(newarr);
    }
    return (
        <>
             <Row xs={1} md={3} className="g-4"> 
                {props.dataList.map((item, idx) => (
                    <Col key={idx}>
                       <EMMCards key={idx} agentticketid={item.agentticketid}  agesubject={item.agesubject} agentdescription={item.agentdescription} agepriority={item.agepriority} employeecomment={item.employeecomment} departmentid={item.departmentid} customerticketid={item.customerticketid} employeeid={item.employeeid}  agestatus={item.agestatus} takeNewArr={takeNewArr}/>
                    </Col>
                ))}
             </Row> 
            {/* <Cardds takeNewArr={takeNewArr} /> */}
        </>
    );

}
export default CardList;



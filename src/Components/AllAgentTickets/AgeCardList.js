import AgeCards from './AgeCards';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardList(props) {

    const takeNewArr = (newarr) => {
        props.takeNewArrFromAgentCardsPage(newarr);
    }
    return (
        <>
             <Row xs={1} md={3} className="g-7"> 
                {props.dataList.map((item, idx) => (
                    <Col key={idx}>
                        <AgeCards key={idx} agentticketid={item.agentticketid}  agesubject={item.agesubject} agentdescription={item.agentdescription} agepriority={item.agepriority} employeecomment={item.employeecomment} departmentid={item.departmentid} customerticketid={item.customerticketid} employeeid={item.employeeid}  agestatus={item.agestatus} takeNewArr={takeNewArr}/>
                    </Col>
                ))}
             </Row> 
            {/* <AgeCards takeNewArr={takeNewArr} /> */}
        </>
    );

}
export default CardList;


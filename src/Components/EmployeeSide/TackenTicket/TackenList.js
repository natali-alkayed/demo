import TackenCards from './TackenCards';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardList(props) {

    const takeNewArr = (newarr) => {
        props.takeNewArrFromAgentCardsPage(newarr);
    }
    // console.log(props.dataList);
    return (
        <>
             <Row xs={1} md={3} className="g-4"> 
                {props.dataList.map((item, idx) => (
                    <Col key={idx}>
                       <TackenCards key={idx} agentticketid={item.agentticketid}  agesubject={item.agesubject} agentdescription={item.agentdescription} agepriority={item.agepriority} employeecomment={item.employeecomment} departmentid={item.departmentid} customerticketid={item.customerticketid} employeeid={item.employeeid}  agestatus={item.agestatus} takeNewArr={takeNewArr}/>
                    </Col>
                ))}
             </Row> 
            {/* <Cardds takeNewArr={takeNewArr} /> */}
        </>
    );

}
export default CardList;



import Cardds from './Cardds';
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
                        <Cardds key={idx} customerticketid={item.customerticketid} tktsubject={item.tktsubject} tktdescription={item.tktdescription} tktstatus={item.tktstatus} customerid={item.customerid} takeNewArr={takeNewArr}/>
                    </Col>
                ))}
             </Row> 
            {/* <Cardds takeNewArr={takeNewArr} /> */}
        </>
    );

}
export default CardList;



import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import TackenModal from './TackenModal';


function TackenCards(props) {

  const [clickedDelBtn, setClickedDelBtn] = useState(false);
  const [clickedCard, setclickedCard] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);

  //console.log(props);

  const handleclose = () => {
    setShowUpdate(false);
  }
  const handleupdate = (item) => {
    setShowUpdate(true);
    setclickedCard(item);
  }

   const handledelete = async (id) => {
   const serverURL = `${process.env.REACT_APP_SERVER_URL}/RemoveAgentTiketFromEmployeeWindow/${id}`
   const axiosRes = await axios.patch(serverURL);

   const serverURL3 = `${process.env.REACT_APP_SERVER_URL}/allAssignTicketByEmployee`
        const axiosRes3 = await axios.get(serverURL3);
        props.takeNewArr(axiosRes3.data);}
  
    const takeNewArrFromChild = (arr) => {
      props.takeNewArr(arr);
    }


  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css"
      />
      <div className="col-md-6 col-lg-4 pb-3">
        <div
          className="card card-custom bg-white border-white border-0"
          style={{ height: 450 }}
        >
          <div
            className="card-custom-img"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-vector/water-color-texture-background_615199-13.jpg?w=2000)"
            }}
          />

          <div className="card-body" style={{ overflowY: "auto" }}>
            <h4 className="card-title">{props.agesubject}</h4>
            <p className="card-text">  {props.agentdescription}</p>
            <p className="card-text">  {props.employeecomment}</p>
          </div>
          <div
            className="card-footer"
            style={{ background: "inherit", borderColor: "inherit" }}
          >
            <Button variant="success" onClick={() => { handleupdate(props) }}>Add Comment</Button>
            <Button variant="danger" onClick={() => { handledelete(props.agentticketid) }}>Remove </Button>
          </div>
        </div>
      </div>
      <TackenModal showFlag={showUpdate} handleclose={handleclose} item={props} takeNewArrFromChild={takeNewArrFromChild} />        
    </>
   
  )

}
export default TackenCards;

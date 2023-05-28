import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";


function EMMCards(props) {

  const [clickedCard, setclickedCard] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);



  const handleclose = () => {
    setShowUpdate(false);
  }

  const handleTake = async (id) => {

  const serverURL = `${process.env.REACT_APP_SERVER_URL}/assignTicketByEmployee/${id}`
  const axiosRes = await axios.patch(serverURL);
  setShowUpdate(true);
  
  }
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
          </div>
          <div
            className="card-footer"
            style={{ background: "inherit", borderColor: "inherit" }}
          >
            <Button variant="success" onClick={() => { handleTake(props.agentticketid) }}>Take Ticket</Button>
          </div>
        </div>
      </div>
      {/* <TackenTicket handleclose={handleclose} takeNewArrFromChild={takeNewArrFromChild} />         */}
    </>
  )
}


export default EMMCards;




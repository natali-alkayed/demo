import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import ModalCard from './ModalCard';
import axios from "axios";


function Cardds(props) {
  const [clickedDelBtn, setClickedDelBtn] = useState(false);
  const [clickedCard, setclickedCard] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);



  const handleclose = () => {
    setShowUpdate(false);
  }
  const handleupdate = (item) => {
    setShowUpdate(true);
    setclickedCard(item);
  }
  const handledelete = async (id) => {
  console.log(id);
  const serverURL = `${process.env.REACT_APP_SERVER_URL}/CloseAgenttTicket/${id}`
  const axiosRes = await axios.patch(serverURL);
  takeNewArrFromChild(axiosRes.data);
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
                "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)"
            }}
          />

          <div className="card-body" style={{ overflowY: "auto" }}>
            <h4 className="card-title">{props.customerticketid} : {props.tktsubject}</h4>
            <p className="card-text">  {props.tktdescription}</p>

          </div>
          <div
            className="card-footer"
            style={{ background: "inherit", borderColor: "inherit" }}
          >
            <Button variant="success" onClick={() => { handleupdate(props) }}>Create ticket</Button>
            <Button variant="danger" onClick={() => { handledelete(props.TID) }}>Close ticket</Button>
          </div>
        </div>
      </div>
      <ModalCard showFlag={showUpdate} handleclose={handleclose} item={clickedCard} takeNewArrFromChild={takeNewArrFromChild} />        
    </>
  )
}


export default Cardds;


///////////////////////////////////////////////////////////////////////////////////////////////


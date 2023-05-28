import { useState } from 'react';
import './Cardds.css';
import Button from 'react-bootstrap/Button';
import ModalCard from './ModalCard';
import axios from "axios";


function Cardds(props) {
  // console.log(props);
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
  const serverURL = `${process.env.REACT_APP_SERVER_URL}/closeCustomerTkt/${id}`
  const axiosRes = await axios.patch(serverURL);
  const serverURL2 = `${process.env.REACT_APP_SERVER_URL}/allCustomersTickets`
  const axiosRes2 = await axios.get(serverURL2);
  takeNewArrFromChild(axiosRes2.data);  }
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
            <h4 className="card-title">{props.customerticketid} : {props.tktsubject}</h4>
            <p className="card-text">  {props.tktdescription}</p>

          </div>
          <div
            className="card-footer"
            style={{ background: "inherit", borderColor: "inherit" }}
          >
            <Button variant="success" onClick={() => { handleupdate(props) }}>Create ticket</Button>
            <Button variant="danger" onClick={() => { handledelete(props.customerticketid) }}>Close ticket</Button>
          </div>
        </div>
      </div>
      <ModalCard showFlag={showUpdate} handleclose={handleclose} item={clickedCard} takeNewArrFromChild={takeNewArrFromChild} />        
    </>
  )
}


export default Cardds;




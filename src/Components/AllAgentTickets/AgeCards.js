import './Cardds.css';
import Button from 'react-bootstrap/Button';


function Cardds(props) {

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
            <p className="card-text">Employee Comment: {props.employeecomment} </p>
            <p className="card-text">Priority: {props.agepriority} </p>
            <p className="card-text">Status: {props.agestatus} </p>
          </div>
          </div>
        </div>

    </>
  )
}


export default Cardds;




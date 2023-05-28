import axios from "axios";
import { useEffect, useState } from "react";
import TackenList from "./TackenList";
// import NavbarAgeHome from './NavbarAgeHome';


function TackenHome() {
    const [AgeData, setAgeData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/allAssignTicketByEmployee`;
        const result = await axios.get(serverUrl);
        setAgeData(result.data);
    }
    const takeNewArrFromAgentCardsPage = (arr) => {
        setAgeData(arr);
    }
    useEffect(() => {
        sendReq();
    }, []);
    
    return (
        <>
        {/* <NavbarAgeHome/> */}
            <TackenList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
        </>
        
    )
    
}

export default TackenHome;







   

    
  
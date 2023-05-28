import axios from "axios";
import { useEffect, useState } from "react";
import EMMCardList from "./EMMCardList";
// import NavbarAgeHome from './NavbarAgeHome';


function EmployeeHome() {
    const [AgeData, setAgeData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/allAgentTicketsOpen`;
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
            <EMMCardList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
        </>
    )
}

export default EmployeeHome;







   

    
  
import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "./CardList";


function AgeHome() {
    const [AgeData, setAgeData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/allCustomersTickets`;
        const result = await axios.get(serverUrl);
        console.log(result.data);
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
            <h1>Home</h1>
            <CardList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
        </>
    )
}

export default AgeHome;







   

    
  
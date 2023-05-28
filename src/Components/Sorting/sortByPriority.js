import axios from "axios";
import { useEffect, useState } from "react";
// import CardList from "./CardList";
// import NavbarAgeHome from './NavbarAgeHome';


function sortByPriority() {
    const [AgeData, setAgeData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/sortAgTicketbyPriority/:${PriNo}`;
        const result = await axios.get(serverUrl);
        // console.log(result.data);
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
        <NavbarAgeHome/>
            <CardList dataList={AgeData} takeNewArrFromAgentCardsPage ={takeNewArrFromAgentCardsPage} />
        </>
    )
}

export default sortByPriority;
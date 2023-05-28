import axios from "axios";
import { useEffect, useState } from "react";
// import CardList from "./CardList";
// import NavbarAgeHome from '../AllAgentTickets/NavbarAgeHome';


function sortByDepartment(props) {
    const [AgeData, setAgeData] = useState([]);
    console.log(props.depData);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/sortAgTicketByDepartment/:${DepNo}`;
        const result = await axios.get(serverUrl);
     //   console.log("nataly");
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

export default sortByDepartment;
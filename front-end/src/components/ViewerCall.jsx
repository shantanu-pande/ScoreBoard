import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("192.168.137.1:5001")

export default function ViewerCall(){
    const [scores, setScores] = useState({});

    useEffect (() => {
        socket.on('data', (data)=>{
            setScores(data.data);
        })
    });
    return(
        <>
            <h1>
                {scores}
            </h1>
        </>
    )
}
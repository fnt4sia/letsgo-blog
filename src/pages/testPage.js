import React from "react";
import "../style/index.css";
import {useState, useEffect} from "react";

export default function TestPage() {
    const [data, setData] = useState([]);   
    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json')
        .then((response) => response.json())
        .then((data) => {
            const dataArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setData(dataArray);
        });
    }, []);

    return(
        <>
            {
                data.map((item) => (
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <p>{item.image.length}</p>
                    </div>
                ))
            }
        </>
    )
}
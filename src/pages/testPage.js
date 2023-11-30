import React from "react";
import "../style/index.css";

export default function TestPage() {
    fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

    return(
        <>
        </>
    )
}
import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {FaUser, FaCalendar} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import '../style/additional.css';

export default function BlogPage(){
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog/'+id+'.json')
        .then((response) => response.json())
        .then((res)=>{
            setData(res);
        })
    }, []);

    return(
        <>
            <Navbar/>
            <div className="px-4 mt-24 md:px-32">
                <img src={data.image} className="w-full h-96 object-cover rounded-lg mt-4"/>
                <p className="text-3xl font-bold mt-4">{data.title}</p>
                <div className="flex gap-5 flex-wrap text-gray-400 mt-3">
                    <div className="flex items-center">
                        <FaUser className="text-black"/>
                        <p>&nbsp;{data.user} &nbsp;</p>
                    </div>
                    <div className="flex items-center">
                        <FaCalendar className="text-black"/>
                        <p>&nbsp;{data.date}</p>
                    </div>
                </div>
                <hr className="mt-4"></hr>
                <div className="mt-4 text-justify blog" dangerouslySetInnerHTML={{__html : data.desc}}></div>

            </div>
            <Footer/>
        </>
    );
}
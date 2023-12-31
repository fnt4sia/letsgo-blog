import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {FaUser, FaCalendar} from "react-icons/fa";
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function EditPage(){
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog/'+id+'.json')
        .then((response) => response.json())
        .then((res)=>{
            setData(res);
            setContent(res.desc);
        })
    }, []);


    async function updateBlog(){
        await fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog/'+id+'.json', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ desc: content })
        })
        .then((response) => response.json())
        .then((res)=>{
            window.location.href = "/";
        })
    }

    const onChangeDesc = (e) => {
        setContent(e);
    }

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
                <ReactQuill value={content} onChange={onChangeDesc}/>
                
                <div className="flex justify-end mt-4 gap-4">
                    <button className="p-2 px-4 bg-red-500 rounded-md text-right text-white" onClick={updateBlog}>Edit</button>
                </div>
            </div>
            <Footer/>
        </>
    );
}
import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRef, useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function KomunitasPage() {

    const[blogData, setBlogData] = useState([]);
    const[eventData, setEventData] = useState([]);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json')
        .then((response) => response.json())
        .then((data) => {
            const blogArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setBlogData(blogArray);
        })
    }, [])

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/event.json')
        .then((response) => response.json())
        .then((data) => {
            const eventArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setEventData(eventArray);

        })
    }, [])

    return(
        <>
            <Navbar/>
            <div className="w-full min-h-60 mt-10 md:mt-20 px-3 md:px-16">
            {   
                blogData && shuffle([...blogData]).map((item, index) => {
                    if (index === 0) {
                        return (
                            <Link to={`/blog/${item.id}`} className="b w-full h-full bg-black relative group">
                                <div className="w-full h-2/3 overflow-hidden bg-black">      
                                    <img className="w-full object-cover aspect-video max-h-96 group-hover:scale-105 group-hover:opacity-70 ease-in-out duration-200" src={item.image}></img>
                                </div>
                                <h3 className="absolute w-full  text-lg font-bold px-3 md:p-5 md:px-7 bottom-3 text-white md:text-2xl text-center ease-in-out duration-200 group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:text-2xl group-hover:md:text-4xl">{item.title}</h3>
                            </Link>
                        )
                    }
                })
            }   
            </div>

            <div className="w-full px-3 mt-6 md:px-24">
                <p className="md:text-xl font-bold mb-4">Hal Yang Mungkin Menarik</p>
                {
                    blogData && shuffle([...blogData]).map((item, index) => {
                        if (index === 0 || index === 1) {
                            return (
                                <Link to={`/blog/${item.id}`} className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md group">
                                    <div className="flex-shrink flex-grow basis-2/3 lg:basis-3/4 p-2 md:flex md:flex-col md:justify-between md:p-5">
                                        <h1 className="font-bold leading-6">{item.title}</h1>
                                        <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis" dangerouslySetInnerHTML={{__html: item.desc }}></p>
                                        <div>
                                            <p className="text-xs">{item.user}</p>
                                            <p className="text-xs">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink flex-grow basis-1/3 lg:basis-1/4 lg:max-h-44 overflow-hidden">
                                        <img src={item.image} className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                                    </div>
                                </Link>
                            )
                        }else{
                            return(null);
                        }
                    })
                }
                
                
                <Link to='/listBlog'>
                    <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
                </Link>
            </div>

            <div className="w-full px-3 mt-4 md:px-24">
                <p className=" md:text-xl font-bold mb-4">Events</p>
                <div className="flex w-full gap-4 overflow-hidden">
                {
                    eventData && eventData.map((item, index) => {
                        if(index < 5){
                            return(
                                <div className="w-40 min-h-52 flex-shrink-0 bg-gray-100 rounded-md">
                                    <div className="w-full h-28">
                                        <img src={item.image} className="object-cover h-full w-full rounded-t-md"></img>
                                    </div>
                                    <div className="w-full p-3 flex flex-col gap-1">
                                        <h1 className="font-bold">{item.title}</h1>
                                        <hr></hr>
                                        <div>
                                        <p className="text-sm font-thin" dangerouslySetInnerHTML={{__html: item.desc }}></p>
                                        </div>
                                        <hr></hr>
                                        <p className="text-sm font-mediumt">{`By : ${item.user}`}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }    
                </div>
                <Link to='/listEvent'>
                    <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
                </Link>
            </div>

            <div className="w-full px-3 mt-6 md:px-24">
                <p className="md:text-xl font-bold mb-4">Latest Blog</p>   
                {
                    blogData && blogData.map((item, index) => {
                        if(index === (blogData.length - 1) || index === (blogData.length - 2)){
                            return(
                                <Link to={`/blog/${item.id}`} className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md group">
                                    <div className="flex-shrink flex-grow basis-2/3 lg:basis-3/4 p-2 md:flex md:flex-col md:justify-between md:p-5">
                                        <h1 className="font-bold leading-6">{item.title}</h1>
                                        <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis" dangerouslySetInnerHTML={{__html: item.desc }}></p>
                                        <div>
                                            <p className="text-xs">{item.user}</p>
                                            <p className="text-xs">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink flex-grow basis-1/3 lg:basis-1/4 lg:max-h-44 overflow-hidden">
                                        <img src={item.image} className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                                    </div>
                                </Link>
                            )
                        }else{
                            return(null);
                        }
                    })
                }
                <Link to='/listBlog'>
                    <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
                </Link>
            </div>
            <Footer/>
        </>
    );
}
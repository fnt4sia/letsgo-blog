import React from "react";
import Navbar from "../components/navbar";
import '../style/index.css';
import {useRef, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default function HomePage() {
    let count = 1; //:D
    const sliderRef = useRef(null);
    const [destinationData, setDestinationData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [isLoadingDestination, setIsLoadingDestination] = useState(true);
    const [isLoadingBlog, setIsLoadingBlog] = useState(true);
    const [isLoadingEvent, setIsLoadingEvent] = useState(true);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        const slider = sliderRef.current;
        slider.appendChild(slider.firstElementChild.cloneNode(true));

        const interval = setInterval(() => {
            slider.animate(
                { transform: `translateX(-${(count % slider.childElementCount) * 100}%)` },
                { duration: count % slider.childElementCount === 0 ? 0 : 500, fill: "forwards" }
            );
            count++;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json')
        .then((response) => response.json())
        .then((data) => {
            const destinationArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setDestinationData(destinationArray);
            setIsLoadingDestination(false)
        })
    }, [])

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json')
        .then((response) => response.json())
        .then((data) => {
            const blogArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setBlogData(blogArray)
            setIsLoadingBlog(false)
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
            setIsLoadingEvent(false)
        })
    }, [])


        return(
            <>
                <Navbar/>
                <div class="h-96 mt-10  bg-black relative grid place-items-center overflow-x-hidden -z-10">
                    <div id="slider" class="slider absolute h-full w-full flex ease-in-out" ref={sliderRef}>
                        <img src="https://blog-images.reddoorz.com/uploads/image/file/4511/prambanan-2010-2-of-2.jpg" class="h-full min-w-full object-cover opacity-50 "></img>
                        <img src="https://www.jababekamorotai.com/wp-content/uploads/2019/12/air-terjun11.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                        <img src="https://elearn.id/wp-content/uploads/2018/01/Taman-Pintar-Sumbre-afiaanwas-blogspotcom.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                    </div>
                    <div class="flex flex-col justify-center items-center z-10 gap-3 md:gap-6">
                        <h1 class="font-bold text-2xl text-center md:text-4xl z-10 text-white">
                            Cari Tujuan Wisata Yang Cocok Untukmu
                        </h1>
                    </div>
                </div>
    
                
                <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold">Rekomendasi Destinasi Wisata</h3>
                <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    isLoadingDestination ? (
                        <div role="status">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    ) : (
                        destinationData && destinationData.map((item) =>(
                            <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                                <img src={item.image[0]} className="w-full rounded-t-md h-48 object-cover"></img>
                                <hr className="mt-2"></hr>
                                <h3 className="text-center font-bold">{item.title}</h3>
                                <hr></hr>
                                <div className="tags flex overflow-x-auto gap-1 p-1">
                                    {
                                        item.tag && item.tag.map((tag) => (
                                            <p className="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">{tag}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    )
                }
                </div>
                

                <Link to='/listDestination'>
                    <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
                </Link>

        
                <div className="w-full px-3 mt-6 md:px-24">
                    <p className="mb-4">Hal Yang Mungkin Menarik</p>

                {
                    isLoadingBlog ? (
                        <div role="status">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    ) : (
                    
                        blogData && shuffle([...blogData]).map((item, index) => {
                            if (index === 0 || index === 1) {
                                return (
                                    <div className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md group">
                                        <div className="flex-shrink flex-grow basis-2/3 lg:basis-3/4 p-2 md:flex md:flex-col md:justify-between md:p-5">
                                            <h1 className="font-bold leading-6">{item.title}</h1>
                                            <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis">{item.desc}</p>
                                            <div>
                                                <p className="text-xs">{item.user}</p>
                                                <p className="text-xs">{item.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink flex-grow basis-1/3 lg:basis-1/4 lg:max-h-44 overflow-hidden">
                                            <img src={item.image} className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                                        </div>
                                    </div>
                                )
                            }else{
                                return(null);
                            }
                        })
                
                    )
                }
                    <Link to='/listBlog'>
                    <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
                    </Link>
                </div>
    
                <div className="w-full px-3 mt-4 md:px-24">
                    <p className="mb-4">Events</p>
                    <div className="flex w-full gap-4 overflow-hidden">
                        {
                            isLoadingEvent ? (
                                <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                eventData && eventData.map((item) =>(
                                    <div className="w-40 min-h-52 flex-shrink-0 bg-gray-100 rounded-md">
                                        <div className="w-full h-28">
                                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full rounded-t-md"></img>
                                        </div>
                                        <div className="w-full p-3 flex flex-col gap-1">
                                            <h1 className="font-bold">{item.title}</h1>
                                            <hr></hr>
                                            <div>
                                            <p className="text-sm font-thin" dangerouslySetInnerHTML={{__html: item.desc }}></p>
                                            </div>
                                            <hr></hr>
                                            <p className="text-sm font-light">{`By :  ${item.user}`}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        }  
                    </div>
                    <Link to='/listEvent'>
                    <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
                    </Link>
                </div>
    
            </>
        ) 
    }
    
    
import React from "react";
import { Link } from "react-router-dom";
import '../style/index.css';
import Navbar from "../components/navbar";
import {  useRef, useEffect, useState } from "react";

export default function WisataPage() {
    let count = 1; //:D
    const sliderRef = useRef(null);
    const[dataDestination, setDestinationData] = useState([]);
    const[dataEvent, setEventData] = useState([]);

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
            <Navbar/><Navbar/>
            <div class="h-72 mt-10  bg-black relative grid place-items-center overflow-x-hidden -z-10">
                <div id="slider" ref={sliderRef} class="slider absolute h-full w-full flex ease-in-out">
                    <img src="https://blog-images.reddoorz.com/uploads/image/file/4511/prambanan-2010-2-of-2.jpg" class="h-full min-w-full object-cover opacity-50 "></img>
                    <img src="https://www.jababekamorotai.com/wp-content/uploads/2019/12/air-terjun11.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="https://elearn.id/wp-content/uploads/2018/01/Taman-Pintar-Sumbre-afiaanwas-blogspotcom.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                </div>
                <div class="flex flex-col justify-center items-center z-10 gap-3 md:gap-6">
                    <h1 class="font-bold text-2xl text-center md:text-4xl z-10 text-white">
                        Cari Tujuan Wisata Yang Cocok Untukmu
                    </h1>
                    <div class="flex bg-center w-2/3">
                        <input type="text" placeholder="Cari sesuatu" class="px-3 py-1 rounded-l-sm w-full"></input>
                        <div class="bg-gray-200 px-2 py-1 rounded-r-sm cursor-pointer">Q</div>
                    </div>
                    <div class="md:px-12 md:pb-0 tags flex flex-wrap overflow-x-auto gap-2 md:gap-5 p-2 justify-center">
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Wisata kota</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Alam</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Keluarga</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Seru</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Murah</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Gunung</p>
                    </div>
                </div>
            </div>

            {
                (sessionStorage.getItem("username") !== null && sessionStorage.getItem("username") === "admin") ? 
                (                
                    <Link to='/addDestination'>
                    <div class="fixed bottom-5 md:bottom-8 right-5 md:right-8 bg-blue-400 h-10 w-10 md:h-14 md:w-14 grid place-items-center rounded-lg text-3xl font-bold">+</div>
                    </Link>
                ) : (null)
            }


            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold">Rekomendasi Destinasi Wisata</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataDestination && dataDestination.sort(() => Math.random() - 0.5).map((item) => (
                        <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                            <img src={item.image[0]} className="w-full rounded-md h-48 object-cover"></img>
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
                }
            </div>

            <Link to='/listDestination'>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </Link>

            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold" id="alam">Wisata Alam</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataDestination && dataDestination.map((item) =>{
                        if(item.tag && item.tag.includes("Wisata Alam")) return (
                            <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                                <img src={item.image[0]} className="w-full rounded-md h-48 object-cover"></img>
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
                        )
                    })
                }
            </div>

            <Link to='/listDestination'>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </Link>
            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold" id="kota">Wisata Kota</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataDestination && dataDestination.map((item) =>{
                        if(item.tag && item.tag.includes("Wisata Kota")) return (
                            <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                                <img src={item.image[0]} className="w-full rounded-md h-48 object-cover"></img>
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
                        )
                    })
                }
            </div>

            <Link to='/listDestination'>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </Link>
            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold" id="sejarah">Wisata Sejarah</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataDestination && dataDestination.map((item) =>{
                        if(item.tag && item.tag.includes("Wisata Sejarah")) return (
                            <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                                <img src={item.image[0]} className="w-full rounded-md h-48 object-cover"></img>
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
                        )
                    })
                }
            </div>

            <Link to='/listDestination'>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </Link>
            
            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold" id="edukasi">Wisata Edukasi</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataDestination && dataDestination.map((item) =>{
                        if(item.tag && item.tag.includes("Wisata Edukasi")) return (
                            <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                                <img src={item.image[0]} className="w-full rounded-md h-48 object-cover"></img>
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
                        )
                    })
                }
            </div>

            <Link to='/listDestination'>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </Link>

            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold" id="religi">Wisata Religi</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataDestination && dataDestination.map((item) =>{
                        if(item.tag && item.tag.includes("Wisata Religi")) return (
                            <div className="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                                <img src={item.image[0]} className="w-full rounded-md h-48 object-cover"></img>
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
                        )
                    })
                }
            </div>

            <Link to='/listDestination'>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </Link>

            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold" id="event">Event Menarik</h3>
            <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12">
                {
                    dataEvent && dataEvent.sort(() => Math.random() - 0.5).map((item) =>(
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
                        )
                    )
                }
            </div>
        </>
    );
}
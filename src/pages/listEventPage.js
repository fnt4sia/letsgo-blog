import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import { useRef, useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Footer from "../components/footer";

export default function ListEventPage(){
    let count = 1;
    const sliderRef = useRef(null);
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

            
            <Link to='/addEvent'>
                <div class="fixed bottom-5 md:bottom-8 right-5 md:right-8 bg-blue-400 h-10 w-10 md:h-14 md:w-14 grid place-items-center rounded-lg text-3xl font-bold">+</div>
            </Link>

            <div class="flex justify-between mt-3 flex-wrap gap-5 p-3 md:px-24 md:gap-12 md:mt-8">
                {
                    dataEvent && dataEvent.map((item) => (
                        <div className="w-40 min-h-52 flex-shrink-0 bg-gray-100 rounded-md">
                            <div className="w-full h-28">
                                <img src={item.image} className="object-cover h-full w-full rounded-t-md"></img>
                            </div>
                            <div className="w-full p-3 flex flex-col gap-1">
                                <h1 className="font-bold">{item.title}</h1>
                                <hr></hr>
                                <div>
                                    <p className="text-sm font-thin" dangerouslySetInnerHTML={{__html : item.desc}}></p>
                                </div>
                                <hr></hr>
                                <p className="text-sm font-light">By : Fitra Ramadhan</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </>
    );
}
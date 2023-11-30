import React from "react";
import {useParams} from "react-router-dom";
import '../style/index.css';
import {useRef, useEffect, useState} from 'react';
import Navbar from "../components/navbar";

export default function DestinationPage() {
    let count = 1; //:D
    const sliderRef = useRef(null);
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [destinationData, setDestinationData] = useState([]);

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/destination/'+id+'.json')
        .then((response) => response.json())
        .then((res)=>{
            setData(res);
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        if (data.image && data.image.length > 0) {
            const slider = sliderRef.current;
            if (slider && slider.firstElementChild) {
                slider.appendChild(slider.firstElementChild.cloneNode(true));
    
                let count = 0;
                const interval = setInterval(() => {
                    slider.animate(
                        { transform: `translateX(-${(count % slider.childElementCount) * 100}%)` },
                        { duration: count % slider.childElementCount === 0 ? 0 : 500, fill: "forwards" }
                    );
                    count++;
                }, 3000);
    
                return () => clearInterval(interval);
            }
        }
    }, [data.image]);



    return(
        <>
            <Navbar/>
            {
                isLoading? (null) : (            
                <div class="h-72 bg-black relative grid place-items-center overflow-x-hidden -z-10">
                    <div id="slider" class="slider absolute h-full w-full flex ease-in-out" ref={sliderRef}>
                        {
                            data.image && data.image.map((img) => (
                                <img src={img} class="h-full min-w-full object-cover opacity-50"></img>
                            ))
                        }
                    </div>
                    <h1 class="font-bold text-2xl md:text-4xl z-10 text-white">
                        {data.title}
                    </h1>
                </div>
                )
            }
           
            <div class="md:p-12 md:px-24 md:pb-0 tags flex flex-wrap overflow-x-auto gap-2 p-2">
                {data.tag && data.tag.map((tag) => (
                    <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">{tag}</p>
                ))}
            </div>

            <div class="flex md:px-24 md:mt-5 flex-1 gap-2 md:flex-col lg:flex-row">
                <div class="md:w-full">
                    <p class="p-3 text-justify indent-8" dangerouslySetInnerHTML={{__html : data.desc}}>

                    </p>
                </div>
                <div class="hidden md:grid place-items-center relative group md:w-full">
                    <div class="grid place-items-center relative h-72 group md:w-1/3 scale-150">
                        {   data.image && (<>  
                            <img src={data.image[0]} class="ease-in-out duration-200 object-cover w-52 h-28 border-gray-700 border-2 rounded-md z-10 group-hover:scale-110"></img>
                            <img src={data.image[1]} class="ease-in-out duration-200 object-cover w-44 h-24 border-gray-700 border-2 rounded-md absolute translate-x-8 translate-y-8 group-hover:translate-x-28 group-hover:translate-y-20 group-hover:scale-110"></img>
                            <img src={data.image[2]} class="ease-in-out duration-200 object-cover w-36 h-20 border-gray-700 border-2 rounded-md absolute -translate-x-5 -translate-y-10 group-hover:-translate-x-10 group-hover:-translate-y-20 group-hover:scale-125"></img>
                            <img src={data.image[3]} class="ease-in-out duration-200 object-cover h-28 w-16 border-gray-700 border-2 rounded-md absolute translate-x-16 -translate-y-11 group-hover:translate-x-28 group-hover:-translate-y-20 group-hover:scale-125"></img>
                            <img src={data.image[4]} class="ease-in-out duration-200 object-cover h-28 w-16 border-gray-700 border-2 rounded-md absolute -translate-x-20 translate-y-4 group-hover:-translate-x-40 group-hover:translate-y-5 group-hover:scale-125"></img>
                            <img src={data.image[5]} class="ease-in-out duration-200 object-cover h-32 w-20 border-gray-700 border-2 rounded-md absolute -translate-x-10 group-hover:-translate-x-16 group-hover:translate-y-20 group-hover:scale-110"></img>
                            </>)  
                        }
                    </div>
                </div>
            </div>

            <h3 class="pt-10 px-3 md:px-24 text-lg md:text-xl font-bold">Rekomendasi Destinasi Wisata</h3>
                <div class="tags flex flex-wrap overflow-x-auto gap-5 p-3 md:px-24 md:gap-12"></div>
        </>      
    );
}
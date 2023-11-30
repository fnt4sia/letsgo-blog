import React from "react";
import Navbar from "../components/navbar";
import '../style/index.css';
import {useRef, useEffect} from 'react';

export default function HomePage() {
    let count = 1; //:D
    const sliderRef = useRef(null);

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

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return(
        <>
            <Navbar/>
            <div class="h-96 mt-10  bg-black relative grid place-items-center overflow-x-hidden -z-10">
                <div id="slider" class="slider absolute h-full w-full flex ease-in-out">
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
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>
                    <div class="tags flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>

                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Candi ujung dunia</h3>
                    <hr></hr>
                    <div class="tags flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
                
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Lorem, ipsum dolor sit amet consectetur</h3>
                    <hr></hr>
                    <div class="tags flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
                
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Lorem, ipsum dolor sit amet consectetur</h3>
                    <hr></hr>
                    <div class="tags flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
                
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Lorem, ipsum dolor sit amet consectetur</h3>
                    <hr></hr>
                    <div class="tags flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
            </div>
            <p className="pr-5 text-right text-sm font-light cursor-pointer">See More {'->'}</p>



            <div className="w-full px-3 mt-6 md:px-24">
                <p className="mb-4">Hal Yang Mungkin Menarik</p>

                <div className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md group">
                    <div className="flex-shrink flex-grow basis-2/3 lg:basis-auto p-2 md:flex md:flex-col md:justify-between md:p-5">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <div>
                            <p className="text-xs">Fitra Ramadhan</p>
                            <p className="text-xs">Yogyakarta | 26 November 2023</p>
                        </div>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 lg:basis-auto lg:max-h-44 overflow-hidden">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                    </div>
                </div>
                
                <div className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md group">
                    <div className="flex-shrink flex-grow basis-2/3 lg:basis-auto p-2 md:flex md:flex-col md:justify-between md:p-5">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <div>
                            <p className="text-xs">Fitra Ramadhan</p>
                            <p className="text-xs">Yogyakarta | 26 November 2023</p>
                        </div>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 lg:basis-auto lg:max-h-44 overflow-hidden">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                    </div>
                </div>
                <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </div>

            <div className="w-full px-3 mt-4 md:px-24">
                <p className="mb-4">Events</p>
                <div className="flex w-full gap-4 overflow-hidden">

                    <div className="w-40 min-h-52 flex-shrink-0 bg-gray-100 rounded-md">
                        <div className="w-full h-28">
                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full rounded-t-md"></img>
                        </div>
                        <div className="w-full p-3 flex flex-col gap-1">
                            <h1 className="font-bold">Konser Seventeen asdadas asdadasd a asdada</h1>
                            <hr></hr>
                            <div>
                            <p className="text-sm font-thin">Yogyakarta </p>
                            <p className="text-sm font-thin">21 November 2023</p>
                            </div>
                            <hr></hr>
                            <p className="text-sm font-mediumt">By : Fitra Ramadhan</p>
                        </div>
                    </div>
                    <div className="w-40 min-h-52 flex-shrink-0 bg-gray-100 rounded-md">
                        <div className="w-full h-28">
                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full rounded-t-md"></img>
                        </div>
                        <div className="w-full p-3 flex flex-col gap-1">
                            <h1 className="font-bold">Konser Seventeen asdadas asdadasd a asdada</h1>
                            <hr></hr>
                            <div>
                            <p className="text-sm font-thin">Yogyakarta </p>
                            <p className="text-sm font-thin">21 November 2023</p>
                            </div>
                            <hr></hr>
                            <p className="text-sm font-mediumt">By : Fitra Ramadhan</p>
                        </div>
                    </div>
                    <div className="w-40 min-h-52 flex-shrink-0 bg-gray-100 rounded-md">
                        <div className="w-full h-28">
                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full rounded-t-md"></img>
                        </div>
                        <div className="w-full p-3 flex flex-col gap-1">
                            <h1 className="font-bold">Konser Seventeen asdadas asdadasd a asdada</h1>
                            <hr></hr>
                            <div>
                            <p className="text-sm font-thin">Yogyakarta </p>
                            <p className="text-sm font-thin">21 November 2023</p>
                            </div>
                            <hr></hr>
                            <p className="text-sm font-mediumt">By : Fitra Ramadhan</p>
                        </div>
                    </div>

                    
                </div>
                <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </div>

        </>
    ) 
    
}
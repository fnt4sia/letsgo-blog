import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";

export default function ListDestinationPage(){
    return(
        <>
        <Navbar/><Navbar/>
            <div class="h-72 bg-black relative grid place-items-center overflow-x-hidden -z-10">
                <div id="slider" class="slider absolute h-full w-full flex ease-in-out py-4">
                    <img src="images/Candi-Prambanan-3.jpg" class="h-full min-w-full object-cover opacity-50 "></img>
                    <img src="images/download.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="images/fakta-menarik-kaws-di-candi-pram-20230822083545.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="images/Untitled.png" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="images/Yogyakarta_Indonesia_Prambanan-temple-complex-02.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                </div>
                <div class="flex flex-col justify-center items-center z-10 gap-3 md:gap-6">
                    <h1 class="font-bold text-2xl text-center md:text-4xl z-10 text-white">
                        Cari Tujuan Wisata Yang Cocok Untukmu
                    </h1>
                </div>
            </div>

            <div class="flex justify-between mt-3 flex-wrap gap-5 p-3 md:px-24 md:gap-12 md:mt-8">
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
        </>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import '../style/index.css';
import Navbar from "../components/navbar";

export default function WisataPage() {
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
                    <div class="flex bg-center w-2/3">
                        <input type="text" placeholder="Cari sesuatu" class="px-3 py-1 rounded-l-sm w-full"></input>
                        <div class="bg-gray-200 px-2 py-1 rounded-r-sm cursor-pointer">Q</div>
                    </div>
                    <div class="md:px-12 md:pb-0 no-scroll-bar flex flex-wrap overflow-x-auto gap-2 md:gap-5 p-2 justify-center">
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Wisata kota</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Alam</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Keluarga</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Seru</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Murah</p>
                        <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Gunung</p>
                    </div>
                </div>
            </div>

            <div class="fixed bottom-5 md:bottom-8 right-5 md:right-8 bg-blue-400 h-10 w-10 md:h-14 md:w-14 grid place-items-center rounded-lg text-3xl font-bold">+</div>

            <h3 class="pt-10 px-3 md:px-12 text-lg md:text-xl font-bold">Rekomendasi Destinasi Wisata</h3>
            <div class="no-scroll-bar flex flex-nowrap md:flex-wrap overflow-x-auto gap-5 p-3 md:px-12 md:gap-12">
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
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
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
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
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
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
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
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
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
                
            </div>

            

            <h3 class="pt-10 px-3 md:px-12 text-lg md:text-xl font-bold">Wisata Budaya</h3>
            <div class="no-scroll-bar flex flex-nowrap md:flex-wrap overflow-x-auto gap-5 p-3 md:px-12 md:gap-12">

                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
            </div>


            <h3 class="pt-10 px-3 md:px-12 text-lg md:text-xl font-bold">Event Menarik</h3>
            <div class="no-scroll-bar flex flex-nowrap md:flex-wrap overflow-x-auto gap-5 p-3 md:px-12 md:gap-12">
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
            </div>
            

            <h3 class="pt-10 px-3 md:px-12 text-lg md:text-xl font-bold">Wisata Alam</h3>
            <div class="no-scroll-bar flex flex-nowrap md:flex-wrap overflow-x-auto gap-5 p-3 md:px-12 md:gap-12">
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
            </div>


            <h3 class="pt-10 px-3 md:px-12 text-lg md:text-xl font-bold">Wisata Kota</h3>
            <div class="no-scroll-bar flex flex-nowrap md:flex-wrap overflow-x-auto gap-5 p-3 md:px-12 md:gap-12">
                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>
                    <div class="no-scroll-bar flex overflow-x-auto gap-1 p-1">
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Wisata kota</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Candi</p>
                        <p class="whitespace-nowrap p-0.5 px-2 bg-gray-200 rounded-lg text-sm">Peninggalan bersejarah</p>
                    </div>
                </div>
            </div>
        </>
    );
}
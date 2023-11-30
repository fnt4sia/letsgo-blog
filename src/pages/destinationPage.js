import React from "react";
import { Link } from "react-router-dom";
import '../style/index.css';
import Navbar from "../components/navbar";

export default function DestinationPage() {
    return(
        <>
            <Navbar/>
            <div class="h-72 bg-black relative grid place-items-center overflow-x-hidden -z-10">
                <div id="slider" class="slider absolute h-full w-full flex ease-in-out">
                    just spam image here
                    <img src="images/Candi-Prambanan-3.jpg" class="h-full min-w-full object-cover opacity-50 "></img>
                    <img src="images/download.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="images/fakta-menarik-kaws-di-candi-pram-20230822083545.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="images/Untitled.png" class="h-full min-w-full object-cover opacity-50"></img>
                    <img src="images/Yogyakarta_Indonesia_Prambanan-temple-complex-02.jpg" class="h-full min-w-full object-cover opacity-50"></img>
                </div>
                <h1 class="font-bold text-2xl md:text-4xl z-10 text-white">
                    Nama Destinasi Wisata
                    Candi Prambanan
                </h1>
            </div>

            <div class="md:p-12 md:pb-0 no-scroll-bar flex flex-wrap overflow-x-auto gap-2 p-2">
                <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Wisata kota</p>
                <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Candi</p>
                <p class="whitespace-nowrap p-1 px-2 bg-gray-200 rounded-lg">Peninggalan bersejarah</p>
            </div>

            <div class="flex md:px-16 md:mt-5 flex-1 gap-2 md:flex-col lg:flex-row">
                <div class="md:w-full">
                    <p class="p-3 text-justify indent-8">
                        Candi Prambanan merupakan candi Hindu yang terbesar di Indonesia. Sampai saat ini belum dapat dipastikan kapan candi ini dibangun dan atas perintah siapa, namun kuat dugaan bahwa Candi Prambanan dibangun sekitar pertengahan abad ke-9 oleh raja dari Wangsa Sanjaya, yaitu Raja Balitung Maha Sambu. Dugaan tersebut didasarkan pada isi Prasasti Syiwagrha yang ditemukan di sekitar Prambanan dan saat ini tersimpan di Museum Nasional di Jakarta. Prasasti berangka tahun 778 Saka (856 M) ini ditulis pada masa pemerintahan Rakai Pikatan.
                    </p>
                    
                    <h3 class="px-3 text-lg font-bold">Harga Tiket</h3>
                    <p class="px-5">Weekday : Rp 40.000,00</p>
                    <p class="px-5">Weekend : Rp 55.000,00</p>
                </div>
                <div class="hidden md:grid place-items-center relative group md:w-full">
                    <div class="grid place-items-center relative h-72 group md:w-1/3 scale-150">
                        <img src="images/Candi-Prambanan-3.jpg" class="ease-in-out duration-200 object-cover w-52 h-28 border-gray-700 border-2 rounded-md z-10 group-hover:scale-110"></img>
                        <img src="images/download.jpg" class="ease-in-out duration-200 object-cover w-44 h-24 border-gray-700 border-2 rounded-md absolute translate-x-8 translate-y-8 group-hover:translate-x-28 group-hover:translate-y-20 group-hover:scale-110"></img>
                        <img src="images/fakta-menarik-kaws-di-candi-pram-20230822083545.jpg" class="ease-in-out duration-200 object-cover w-36 h-20 border-gray-700 border-2 rounded-md absolute -translate-x-5 -translate-y-10 group-hover:-translate-x-10 group-hover:-translate-y-20 group-hover:scale-125"></img>
                        <img src="images/Untitled.png" class="ease-in-out duration-200 object-cover h-28 w-16 border-gray-700 border-2 rounded-md absolute translate-x-16 -translate-y-11 group-hover:translate-x-28 group-hover:-translate-y-20 group-hover:scale-125"></img>
                        <img src="images/Yogyakarta_Indonesia_Prambanan-temple-complex-02.jpg" class="ease-in-out duration-200 object-cover h-28 w-16 border-gray-700 border-2 rounded-md absolute -translate-x-20 translate-y-4 group-hover:-translate-x-40 group-hover:translate-y-5 group-hover:scale-125"></img>
                        <img src="images/Candi-Prambanan-3.jpg" class="ease-in-out duration-200 object-cover h-32 w-20 border-gray-700 border-2 rounded-md absolute -translate-x-10 group-hover:-translate-x-16 group-hover:translate-y-20 group-hover:scale-110"></img>
                    </div>
                </div>
            </div>

            <h3 class="pt-5 px-3 md:px-12 text-lg font-bold">Destinasi Wisata Lainnya</h3>
            <div class="no-scroll-bar flex flex-nowrap md:flex-wrap overflow-x-auto gap-5 p-3 md:px-12 md:gap-12">

                <div class="bg-gray-100 w-40 md:w-44 rounded-md border-gray-300 border-2 flex flex-col justify-between gap-2 hover:scale-105 ease-in-out duration-150">
                    change src
                    <img src="images/Candi-Prambanan-3.jpg" class="w-full rounded-md h-48 object-cover"></img>
                    <hr class="mt-2"></hr>
                    change title
                    <h3 class="text-center font-bold">Prambanan</h3>
                    <hr></hr>

                    edit/add tags
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
        </>      
    );
}
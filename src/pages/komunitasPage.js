import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";

export default function KomunitasPage() {
    return(
        <>
            <Navbar/>
            <div className="w-full h-60 mt-16 px-3">
                <div className="bg-gray-300 w-full h-full p-6">
                    <img className="w-full h-3/4"></img>
                    <h3 className="w-full mt-4 h-1/4 text-lg font-bold">8 Rekomendasi Tempat Wisata Di Yogyakarta </h3>
                </div>
            </div>

            <div className="w-full px-3 mt-6">
                <p className="mb-4">Hal Yang Mungkin Menarik</p>
                <div className="w-full flex mb-4 gap-4">
                    <div className="flex-shrink flex-grow basis-2/3">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:block">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <p className="text-xs">Fitra Ramadhan</p>
                        <p className="text-xs">Yogyakarta | 26 November 2023</p>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 .image-list ">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className=""></img>
                    </div>
                </div>
                <div className="w-full flex mb-4 gap-4">
                    <div className="flex-shrink flex-grow basis-2/3">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:block">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <p className="text-xs">Fitra Ramadhan</p>
                        <p className="text-xs">Yogyakarta | 26 November 2023</p>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 .image-list">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className=""></img>
                    </div>
                </div>
                <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </div>

            <div className="w-full px-3 mt-4">
                <p className="mb-4">Events</p>
                <div className="flex w-full gap-4 overflow-hidden">
                    <div className="w-40 h-52 flex-shrink-0">
                        <div className="w-full h-1/2">
                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full"></img>
                        </div>
                        <div className="w-full p-1">
                            <h1 className="font-bold">Konser Seventeen</h1>
                            <p className="text-sm font-thin">Yogyakarta </p>
                            <p className="text-sm font-thin">21 November 2023</p>
                            <p className="text-sm font-mediumt">By : Fitra Ramadhan</p>
                        </div>
                    </div>
                    <div className="w-40 h-52 flex-shrink-0">
                        <div className="w-full h-1/2">
                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full"></img>
                        </div>
                        <div className="w-full p-1">
                            <h1 className="font-bold">Konser Seventeen</h1>
                            <p className="text-sm font-thin">Yogyakarta </p>
                            <p className="text-sm font-thin">21 November 2023</p>
                            <p className="text-sm font-mediumt">By : Fitra Ramadhan</p>
                        </div>
                    </div>
                    <div className="w-40 h-52 flex-shrink-0">
                        <div className="w-full h-1/2">
                            <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03618-x/d41586-023-03618-x_26361588.jpg?as=webp" className="object-cover h-full w-full"></img>
                        </div>
                        <div className="w-full p-1">
                            <h1 className="font-bold">Konser Seventeen</h1>
                            <p className="text-sm font-thin">Yogyakarta </p>
                            <p className="text-sm font-thin">21 November 2023</p>
                            <p className="text-sm font-mediumt">By : Fitra Ramadhan</p>
                        </div>
                    </div>
                </div>
                <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </div>

            <div className="w-full px-3 mt-4">
                <p className="mb-4">Latest Blog</p>   
                <div className="w-full flex mb-4 gap-4">
                    <div className="flex-shrink flex-grow basis-2/3">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:block">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <p className="text-xs">Fitra Ramadhan</p>
                        <p className="text-xs">Yogyakarta | 26 November 2023</p>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 .image-list ">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className=""></img>
                    </div>
                </div>
                <div className="w-full flex mb-4 gap-4">
                    <div className="flex-shrink flex-grow basis-2/3">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:block">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <p className="text-xs">Fitra Ramadhan</p>
                        <p className="text-xs">Yogyakarta | 26 November 2023</p>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 .image-list">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className=""></img>
                    </div>
                </div>
                <p className="text-right text-sm font-light cursor-pointer">See More {'->'}</p>
            </div>

        </>
    );
}
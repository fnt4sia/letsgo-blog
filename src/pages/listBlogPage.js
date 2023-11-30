import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function listBlogPage(){
    return(
        <>
            <Navbar/>
            <div className="w-full h-60 mt-16 px-3">
                <div className="b w-full h-full">
                    <div className="w-full h-2/3">
                        <img className="w-full object-cover h-full" src="https://media.nature.com/lw767/magazine-assets/d41586-023-03711-1/d41586-023-03711-1_26352646.jpg?as=webp"></img>
                    </div>
                    <h3 className="w-full mt-2 text-lg font-bold">8 Rekomendasi Tempat Wisata Di Yogyakarta !</h3>
                </div>
            </div>

            <div className="w-full px-3 mt-6 md:px-16">
                <div className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md">
                    <div className="flex-shrink flex-grow basis-2/3 md:basis-auto p-2 md:flex md:flex-col md:justify-between md:p-5">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:block">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <div>
                            <p className="text-xs">Fitra Ramadhan</p>
                            <p className="text-xs">Yogyakarta | 26 November 2023</p>
                        </div>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 md:basis-auto md:max-h-44">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full"></img>
                    </div>
                </div>
                
                <div className="w-full flex mb-4 gap-4 md:gap-10 bg-gray-200 rounded-md">
                    <div className="flex-shrink flex-grow basis-2/3 md:basis-auto p-2 md:flex md:flex-col md:justify-between md:p-5">
                        <h1 className="font-bold leading-6">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                        <p className="hidden font-light text-xs sm:block">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <div>
                            <p className="text-xs">Fitra Ramadhan</p>
                            <p className="text-xs">Yogyakarta | 26 November 2023</p>
                        </div>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/3 md:basis-auto md:max-h-44">
                        <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full"></img>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>

    )
}
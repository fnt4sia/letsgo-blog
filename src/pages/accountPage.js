import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { VscAccount } from "react-icons/vsc";

export default function AccountPage(){
    if(sessionStorage.getItem("username") === null){
        window.location.href = "/login";
        return null;    
    }else{
        return(
            <>
                <Navbar/>
                <div className="mt-10 p-10 flex flex-col">
                    <div className="flex gap-10 items-center lg:self-center">
                        <div className="">
                            <VscAccount className="text-7xl"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">Account Name</h3>
                            <p>Total Article Views: 42069</p>
                            <button className="bg-gray-200 w-fit p-0.5 px-2 rounded-sm mt-1">logout</button>
                        </div>
                    </div>

                    <h3 className="text-2xl mt-10 lg:text-center">Acticle Posted</h3>
                            
                    <div className="w-full px-3 mt-6 lg:mt-12 md:px-16 flex gap-3 lg:gap-10 flex-wrap">
                        <div className="w-full lg:w-2/5 grow flex gap-4 md:gap-10 bg-gray-200 rounded-md group">
                            <div className="flex-shrink flex-grow basis-2/3 p-2 flex flex-col gap-3 md:justify-between md:p-5">
                                <h1 className="font-bold leading-6 sm:line-clamp-3 sm:text-ellipsis">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                                <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                <div>
                                    <p className="text-xs">Fitra Ramadhan</p>
                                    <p className="text-xs">Yogyakarta | 26 November 2023</p>
                                </div>
                            </div>
                            <div className="flex-shrink flex-grow basis-1/3 sm:max-h-56 overflow-hidden">
                                <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-2/5 grow flex gap-4 md:gap-10 bg-gray-200 rounded-md group">
                            <div className="flex-shrink flex-grow basis-2/3 p-2 flex flex-col gap-3 md:justify-between md:p-5">
                                <h1 className="font-bold leading-6 sm:line-clamp-3 sm:text-ellipsis">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                                <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                <div>
                                    <p className="text-xs">Fitra Ramadhan</p>
                                    <p className="text-xs">Yogyakarta | 26 November 2023</p>
                                </div>
                            </div>
                            <div className="flex-shrink flex-grow basis-1/3 sm:max-h-56 overflow-hidden">
                                <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-2/5 grow flex gap-4 md:gap-10 bg-gray-200 rounded-md group">
                            <div className="flex-shrink flex-grow basis-2/3 p-2 flex flex-col gap-3 md:justify-between md:p-5">
                                <h1 className="font-bold leading-6 sm:line-clamp-3 sm:text-ellipsis">Perjalanan Keliling Indonesia Serta Biayanya</h1>
                                <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                <div>
                                    <p className="text-xs">Fitra Ramadhan</p>
                                    <p className="text-xs">Yogyakarta | 26 November 2023</p>
                                </div>
                            </div>
                            <div className="flex-shrink flex-grow basis-1/3 sm:max-h-56 overflow-hidden">
                                <img src="https://media.nature.com/lw767/magazine-assets/d41586-023-03774-0/d41586-023-03774-0_26372138.jpg?as=webp" className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </>
        )
    }

}
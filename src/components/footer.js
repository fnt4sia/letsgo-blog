import React from "react";
import '../style/index.css';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

export default function Footer(){
    return(
        <div className="mt-16 text">
            <div className="w-full flex flex-col items-center gap-4 text-white text-center p-12 md:flex-row md:justify-between md:items-start md:px-20" style={{backgroundColor: '#232027'}}>
                <h1 className="font-bold text-3xl text-center">
                    Letsgo Blog
                </h1>
                <div className="flex flex-col gap-2 text-center md:gap-20 md:flex-row md:text-left ">
                    <ul>
                        <li className="font-bold mb-2 text-lg">Wisata</li>
                        <li className="p-1 font-light text-gray-400">Pantai</li>
                        <li className="p-1 font-light text-gray-400">Gunung</li>
                        <li className="p-1 font-light text-gray-400">Air Terjun</li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-2 text-lg">Komunitas</li>
                            <li className="p-1 font-light text-gray-400">Blog</li>
                            <li className="p-1 font-light text-gray-400">Events</li>
                            <li className="p-1 font-light text-gray-400">Support</li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-2 text-lg">About Us</li>
                        <li className="p-1 font-light text-gray-400">Our Team</li>
                        <li className="p-1 font-light text-gray-400">Careers</li>
                        <li className="p-1 font-light text-gray-400">Contact</li>
                    </ul>
                    <ul className='flex gap-6 md:items-start mt-4'>
                        <img src={facebook} ></img>
                        <img src={twitter}></img>
                        <img src={pinterest}></img>
                        <img src={instagram}></img>
                    </ul>
                </div>
            </div>
        </div>
    )
}
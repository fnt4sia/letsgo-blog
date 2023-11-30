import React from 'react';
import '../style/index.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar () {
    const[clicked, setDropdown] = useState(false);
    const handleClick = () => {
        if(clicked === true){
            setDropdownWisata(false);
        }
        setDropdown(!clicked);
    }
    const[wisataDrop, setDropdownWisata] = useState(false);
    const handleClickWisata = () => {
        setDropdownWisata(!wisataDrop);
    }

    return(
        <nav className="fixed top-0 w-screen flex justify-between items-center z-50 text-white py-3 px-6" style={{backgroundColor: '#232027'}}>
            <Link to={'/'}><h1 className="self-center text-lg font-semibold cursor-pointer">LetsGo Blog</h1></Link>
            <ul className='sm:h-full flex items-center text-base font-semibold sm:py-0 gap-2 justify-center sm:gap-8'>
                <li className='relative h-full grid place-items-center'>
                    <p onClick={handleClickWisata} className="z-50 cursor-pointer">Wisata</p>
                    {wisataDrop ? (                  
                    <ul className='text-center absolute top-full text-sm opacity-1 duration-300 cursor-pointer translate-y-0 -z-10 px-3' style={{backgroundColor: '#232027'}}>
                        <a href='/wisata#alam'><li className='py-1 font-light cursor-pointer'>alam</li></a>
                        <a href='/wisata#kota'><li className='py-1 font-light cursor-pointer'>kota</li></a>
                        <a href='/wisata#sejarah'><li className='py-1 font-light cursor-pointer'>sejarah</li></a>
                        <a href='/wisata#edukasi'><li className='py-1 font-light cursor-pointer'>edukasi</li></a>
                        <a href='/wisata#religi'><li className='py-1 font-light cursor-pointer'>religi</li></a>
                        <a href='/wisata#event'><li className='py-1 font-light cursor-pointer'>event</li></a>
                    </ul>) 
                    : (
                        <ul className='text-center absolute top-full text-sm opacity-0 duration-300 -translate-y-1/2 -z-50 px-3' style={{backgroundColor: '#232027'}}>
                            <a href='/wisata#alam'><li className='py-1 font-light cursor-pointer'>alam</li></a>
                            <a href='/wisata#kota'><li className='py-1 font-light cursor-pointer'>kota</li></a>
                            <a href='/wisata#sejarah'><li className='py-1 font-light cursor-pointer'>sejarah</li></a>
                            <a href='/wisata#edukasi'><li className='py-1 font-light cursor-pointer'>edukasi</li></a>
                            <a href='/wisata#religi'><li className='py-1 font-light cursor-pointer'>religi</li></a>
                            <a href='/wisata#event'><li className='py-1 font-light cursor-pointer'>event</li></a>
                        </ul>
                    )}
  
                </li>
                <Link to='/community'><li className='cursor-pointer'>Komunitas</li></Link>
                {
                        localStorage.getItem('username') ? (<Link to={`/account/${localStorage.getItem('username')}`}><li className='py-2 cursor-pointer'>Akun</li></Link>) : (<Link to='/login'><li className='py-2 cursor-pointer'>Akun</li></Link>)
                    }
            </ul>
        </nav>
    );
}

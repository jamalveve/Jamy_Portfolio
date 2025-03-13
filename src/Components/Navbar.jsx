import React, { useEffect, useState } from 'react';
import Logo from "../assets/Images/TagName.png"
import { MENU_LINKS } from '../utils/data';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsopen] = useState(true);

    const toggelmenu = () => {
        setIsopen(!isOpen);
    }
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth>=768){
                setIsopen(true);
            }else{
                setIsopen(false);
            }
        }
    handleResize();
    window.addEventListener("resize",handleResize);

       return()=>{
        window.addEventListener("resize",handleResize)
       } 
    },[])
    return (
        <nav className='container mx-auto sticky top-5 z-10'>

            {/* mx auto not working, z not working */}
            <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#8A2BE2] m-8 background-blur-[10px] m-5 p-3 md:p-0 ">

                <img className="h-11 ml-6 -mb-0.5" src={Logo} alt="logo" />

                <button className='block md:hidden text-[#333] mr-6 focus:outline-none' onClick={toggelmenu}>
                    <svg className='w-6 h-6'
                        fill="none"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" >

                    {isOpen ? (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7" />

                    )}
                    </svg>
                </button>


                <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
                    {MENU_LINKS.map((itemS) => (
                        <li key={itemS.id}>
                            <Link
                                activeClass="active"
                                to={itemS.to}
                                smooth
                                spy
                                offset={itemS.offset}
                                className="menu-item"
                            >
                                {itemS.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className='hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 
                rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105'>Hire Me</button>
            </div>
            {/* hire mee button */}
            {/* <div className='flex'>helo</div> */}
        </nav>
    )
}
export default Navbar;
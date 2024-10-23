'use client';
import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [showDropdown, setShowDropdown] = useState({
        rooms: false,
        pages: false,
    });

    const linkStyle = "py-3 px-3 text-[#FF9933] hover:bg-[#FF9933] hover:text-white transition duration-200 relative cursor-pointer block";
    const activeLinkStyle = "py-3 px-3 text-[#FF9933] border-b-2 border-[#BF6D00] relative cursor-pointer border-double";
    const dropdownItemStyle = "px-4 py-2 text-left text-[#FF9933] hover:bg-[#FF9933] hover:text-white transition duration-200 block z-10";

    const toggleDropdown = (dropdown) => {
        setShowDropdown((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
    };

    return (
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="items-center text-[#FF9933] border-double text-center">
                            <h1 className="mb-0">Hotel Booking</h1>
                            <motion.div 
                            
                            className="flex ">
                            <Typewriter
                                options={{
                                    strings: ['Welcome', 'स्वागत', 'ਸੁਆਗਤ ਹੈ', 'સ્વાગત છે'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                                
                            />
                            <LiaPrayingHandsSolid size={25}/>
                            </motion.div>
                        </div>

                        {/* Primary Navbar items */}
                        <div className="hidden md:flex flex-grow justify-center space-x-4 relative">
                            <Link href={'/'}
                                className={activeLink === 'Home' ? activeLinkStyle : linkStyle}
                                onClick={() => setActiveLink('Home')}
                            >
                                Home
                            </Link>

                            <div 
                                className={linkStyle}
                                onMouseEnter={() => toggleDropdown('rooms')}
                                onMouseLeave={() => toggleDropdown('rooms')}
                            >
                                Rooms
                                {showDropdown.rooms && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute bg-white mt-2 drop-shadow-lg rounded-lg z-20" // Increased z-index
                                    >
                                        <div className="py-2 w-max">
                                            <Link href={'/deluxe-rooms'} className={dropdownItemStyle}>Deluxe Rooms</Link>
                                            <Link href={'/standard-rooms'} className={dropdownItemStyle}>Standard Rooms</Link>
                                            <Link href={'/suites'} className={dropdownItemStyle}>Suites</Link>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            <div 
                                className={linkStyle}
                                onMouseEnter={() => toggleDropdown('pages')}
                                onMouseLeave={() => toggleDropdown('pages')}
                            >
                                Pages
                                {showDropdown.pages && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute bg-white left-0 mt-2 drop-shadow-lg rounded-lg z-20" // Increased z-index
                                    >
                                        <div className="py-2 w-max">
                                            <Link href={'/page1'} className={dropdownItemStyle}>Page 1</Link>
                                            <Link href={'/page2'} className={dropdownItemStyle}>Page 2</Link>
                                            <Link href={'/page3'} className={dropdownItemStyle}>Page 3</Link>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            <Link href={'/about'} className={activeLink === 'About' ? activeLinkStyle : linkStyle} onClick={() => setActiveLink('About')}>About</Link>
                            <Link href={'/contact'} className={activeLink === 'Contact' ? activeLinkStyle : linkStyle} onClick={() => setActiveLink('Contact')}>Contact</Link>
                            <Link href={'/news'} className={activeLink === 'News' ? activeLinkStyle : linkStyle} onClick={() => setActiveLink('News')}>News</Link>
                        </div>
                        
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                                <FiAlignJustify color="orange" size={25}/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
                >
                    <Link href={'/'} className={linkStyle} onClick={() => setActiveLink('Home')}>Home</Link>
                    <div className='relative'>
                        <div className={linkStyle} onClick={() => toggleDropdown('rooms')}>Rooms</div>
                        {showDropdown.rooms && (
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="py-2 bg-white shadow-md z-20" // Increased z-index
                            >
                                <Link href={'/deluxe-rooms'} className={dropdownItemStyle}>Deluxe Rooms</Link>
                                <Link href={'/standard-rooms'} className={dropdownItemStyle}>Standard Rooms</Link>
                                <Link href={'/suites'} className={dropdownItemStyle}>Suites</Link>
                            </motion.div>
                        )}
                    </div>
                    <Link href={'/about'} className={linkStyle} onClick={() => setActiveLink('About')}>About</Link>
                    <Link href={'/contact'} className={linkStyle} onClick={() => setActiveLink('Contact')}>Contact</Link>
                    <Link href={'/news'} className={linkStyle} onClick={() => setActiveLink('News')}>News</Link>
                </motion.div>
            </nav>
        </motion.div>
    );
};

export default Navbar;

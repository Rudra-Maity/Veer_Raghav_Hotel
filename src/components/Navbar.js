'use client';
import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Link from "next/link"; // Change to next/link
import { LiaPrayingHandsSolid } from "react-icons/lia";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = "py-3 px-3 text-[#FF9933] hover:bg-[#FF9933] hover:text-white transition duration-200 relative cursor-pointer block";
    const activeLinkStyle = "py-3 px-3 text-[#FF9933] border-b-2 border-[#BF6D00] relative cursor-pointer border-double";

    return (
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="bg-white shadow-lg z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center cursor-pointer ">
                        <div className="items-center text-[#FF9933] border-double text-center pr-10 ">
                            <h1 className="mb-0">Hotel Booking</h1>
                            <motion.div className="flex">
                                <Typewriter
                                    options={{
                                        strings: ['Welcome', 'स्वागत', 'ਸੁਆਗਤ ਹੈ', 'સ્વાગત છે'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                    }}
                                />
                                <LiaPrayingHandsSolid size={25} />
                            </motion.div>
                        </div>

                        <div className="hidden md:flex flex-grow justify-between space-x-4">
                            <Link href="/" className={linkStyle} onClick={() => setIsOpen(false)}>
                                Home
                            </Link>

                            <Link href="/gallery" className={linkStyle} onClick={() => setIsOpen(false)}>
                                Gallery
                            </Link>

                            <Link href="/about" className={linkStyle} onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                            
                            <Link href="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>

                            <Link href="/news" className={linkStyle} onClick={() => setIsOpen(false)}>
                               Rooms
                            </Link>
                        </div>
                        
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                                <FiAlignJustify color="orange" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
                >
                    <Link href="/" className={linkStyle} onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/gallery" className={linkStyle} onClick={() => setIsOpen(false)}>
                        Gallery
                    </Link>
                    <Link href="/about" className={linkStyle} onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <Link href="/news" className={linkStyle} onClick={() => setIsOpen(false)}>
                        Rooms
                    </Link>
                </motion.div>
            </nav>
        </motion.div>
    );
};

export default Navbar;

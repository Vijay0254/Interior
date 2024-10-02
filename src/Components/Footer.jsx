import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer initial={{opacity: 0,y: 100}} animate={{opacity:1, y: 0}} transition={{duration: 0.5, delay: 0.2}} className='border-t-[1px] py-3 border-slate-400 flex justify-between px-5 md:px-10 bg-black text-white'>
        <div className='flex items-center gap-1'>
            <h1 className='text-2xl'>&copy;</h1>
            <h1 className='font-bold text-xl'>Interior</h1>
        </div>
        <div className='flex gap-5 items-center cursor-pointer'>
            <FaWhatsapp className='hover:text-slate-500 size-7'/>
            <MdOutlineMail className='hover:text-slate-500 size-7'/>
            <FaPhoneAlt className='hover:text-slate-500 size-5'/>
        </div>
    </motion.footer>
  )
}

export default Footer
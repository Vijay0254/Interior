import React from 'react'
import logoImg from "../assets/logo.png"
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header initial={{opacity: 0,y: -100}} animate={{opacity:1, y: 0}} transition={{duration: 0.5, delay: 0.2}} className='flex md:gap-0 gap-5 justify-between items-center container py-5 md:py-7'>
        <div className='flex items-center gap-3'>
            <img className='size-10' src={logoImg} alt="logo" />
            <h1 className='font-bold text-xl md:text-2xl'>Interior</h1>
        </div>
        <div className='hidden md:flex gap-12 font-semibold text-lg'>
            <a href="#hero" className='hover:text-slate-500'>About</a>
            <a href="#services" className='hover:text-slate-500'>Services</a>
            <a href="#testimonials" className='hover:text-slate-500'>Testimonials</a>
            <a href="#subscribe" className='hover:text-slate-500'>Contact</a>
        </div>
        <div>
            <button className='box hover:box_hover duration-300 text-sm md:text-base font-semibold border-[1px] border-black px-4 py-2 hover:text-white hover:bg-black'>Try For Free</button>
        </div>
    </motion.header>
  )
}

export default Header
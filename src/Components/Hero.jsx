import React from 'react'
import heroImg from "../assets/hero.png"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id='hero' className='flex md:flex-row md:gap-y-0 gap-y-10 flex-col justify-around items-center py-24 container'>
        <div className='flex flex-col text-center md:text-start gap-7 md:w-[400px] md:pl-12'>
            <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.4}} className='font-playfair font-extrabold text-4xl'>SKETCH LUXURY INTERIOR DESIGN</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.7}} className='text-slate-500'>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</motion.p>
            <div className='flex gap-6 md:justify-normal justify-center'>
                <motion.button initial={{opacity: 0, y: 70}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.8}} className='box_hover font-semibold border-[1px] border-black px-4 py-2 text-white bg-black'>GET STARTED</motion.button>
                <motion.button initial={{opacity: 0, y: 70}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.8}} className='box hover:box_hover duration-300 font-semibold border-[1px] border-black px-4 py-2 hover:text-white hover:bg-black'>CONTACT US</motion.button>
            </div>
        </div>
        <div>
            <motion.img initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.4}} src={heroImg} alt="hero" className='md:w-[600px]' />
        </div>
    </section>
  )
}

export default Hero
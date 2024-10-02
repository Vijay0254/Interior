import React from 'react'
import banner1Img from "../assets/banner1.png"
import { motion } from 'framer-motion'

const Banner1 = () => {
  return (
    <section className='flex flex-col md:gap-y-0 gap-y-4 md:flex-row items-center justify-around pb-24'>
        <div>
            <motion.img initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.4}} src={banner1Img} alt="banner1" />
        </div>
        <div className='flex flex-col px-7 gap-y-6 md:w-[500px]'>
            <motion.h1 initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.4}} className='font-bold text-4xl font-playfair'>We Believe that a team makes any project better</motion.h1>
            <motion.p initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.6}} className='text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid</motion.p>
            <div>
                <motion.button initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.8}} className='box_hover font-semibold border-[1px] border-black px-4 py-2 text-white bg-black'>Discover Now</motion.button>
            </div>
        </div>
    </section>
  )
}

export default Banner1
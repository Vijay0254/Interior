import React from 'react'
import banner2Img from "../assets/banner2.png"
import { motion } from 'framer-motion'

const Banner2 = () => {
  return (
    <section className='flex flex-col-reverse md:gap-y-0 gap-y-4 md:flex-row items-center justify-around pb-24 container'>
        <div className='flex flex-col px-7 gap-y-6 md:w-[500px]'>
            <motion.h1 initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.4}} className='font-bold text-4xl font-playfair'>Simple way to make stylish living room</motion.h1>
            <motion.p initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.6}} className='text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam adipisicing elit. Suscipit earum accusantium tempore nam aliquid</motion.p>
            <motion.div initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.8}} className='flex gap-4'>
                <div className='w-20'>
                    <h1 className='pb-1 font-bold text-3xl font-playfair'>15</h1>
                    <p className='text-sm text-slate-500'>Years of Experience</p>
                </div>
                <div className='w-20'>
                    <h1 className='pb-1 font-bold text-3xl font-playfair'>350</h1>
                    <p className='text-sm text-slate-500'>Happy Clients</p>
                </div>
                <div className='w-20'>
                    <h1 className='pb-1 font-bold text-3xl font-playfair'>34</h1>
                    <p className='text-sm text-slate-500'>Award Gained</p>
                </div>
            </motion.div>
            <div>
                <motion.button initial={{opacity: 0, y: 70}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1.0}} className='box_hover font-semibold border-[1px] border-black px-4 py-2 text-white bg-black'>Contact Us</motion.button>
            </div>
        </div>
        <div>
            <motion.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.4}} src={banner2Img} alt="banner1" />
        </div>
    </section>
  )
}

export default Banner2
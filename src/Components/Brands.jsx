import React from 'react'
import brand1Img from "../assets/brand1.png"
import brand2Img from "../assets/brand2.png"
import brand3Img from "../assets/brand3.png"
import brand4Img from "../assets/brand4.png"
import brand5Img from "../assets/brand5.png"
import { motion } from 'framer-motion'

const Brands = () => {
  return (
    <section className='flex flex-wrap md:flex-nowrap justify-center container gap-y-4 gap-x-5 md:gap-y-0 md:justify-evenly md:py-20'>
        <motion.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.4}} src={brand1Img} alt="brand1" className='w-[120px] md:w-auto' />
        <motion.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.6}} src={brand2Img} alt="brand2" className='w-[120px] md:w-auto' />
        <motion.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.8}} src={brand3Img} alt="brand3" className='w-[120px] md:w-auto' />
        <motion.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 1.0}} src={brand4Img} alt="brand4" className='w-[120px] md:w-auto' />
        <motion.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 1.2}} src={brand5Img} alt="brand5" className='w-[120px] md:w-auto' />
    </section>
  )
}

export default Brands
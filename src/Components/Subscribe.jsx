import { motion } from 'framer-motion'
import React from 'react'

const Subscribe = () => {
  return (
    <section id='subscribe' className='flex flex-col items-center py-20'>
        <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.3}} className='text-4xl text-center font-bold font-playfair pb-5'>Subsribe to our Newsletter</motion.h1>
        <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} className='text-sm pb-5 text-center md:w-[400px] scroll-pb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero doloremque ab eum!</motion.p>
        <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}}>
            <input className='p-3 px-4 md:pr-12 outline-none border-[1px] border-r-0 border-slate-400' type="text" placeholder='Enter your Email'/>
            <button className='p-3 px-6 border-[1px] bg-black text-white uppercase border-slate-400'>Subscribe</button>
        </motion.div>
    </section>
  )
}

export default Subscribe
import { delay, motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'

const Testimonials = () => {
    const items =[
        {
            id: 1,
            name: "John Doe",
            designation: "Designer",
            img: "https://i.pravatar.cc/300?img=1",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            delay: 0.2,
          },
          {
            id: 2,
            name: "Alex",
            designation: "Developer",
            img: "https://i.pravatar.cc/300?img=2",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            delay: 0.4,
          },
          {
            id: 3,
            name: "George",
            designation: "Manager",
            img: "https://i.pravatar.cc/300?img=3",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            delay: 0.6,
          },
    ]
  return (
    <section id='testimonials'>
        <div className='flex flex-col items-center md:pb-0 pb-8'>
            <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.3}} className='text-4xl text-center font-bold font-playfair pb-3'>Words from our coustomers</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} className='text-sm pb-5 text-center md:w-[400px]'>Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
        </div>
        <div className='bg-black container grid grid-cols-1 md:grid-cols-3 gap-10 py-12'>
            {
                items.map((element) =>(
                    <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: element.delay}} key={element.id} className='text-white hover:bg-white hover:text-black duration-500 py-10 p-5 md:w-[400px] border-[1px] border-slate-300'>
                        <div className='flex gap-3 items-center border-b-[1px] pb-5 border-slate-400'>
                            <img src={element.img} alt="profile img" className='size-16 rounded-full' />
                            <div>
                                <h1 className='font-bold'>{element.name}</h1>
                                <p className='text-xs text-slate-400'>{element.designation}</p>
                                <p className='text-xs pt-2'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <p className='text-sm pt-5'>{element.text}</p>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default Testimonials
import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const Features = () => {
    const items = [
        {
            id: 1,
            title: "Luxury Facilities",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
            icon: <FaVectorSquare />,
            delay: 0.5,
          },
          {
            id: 2,
            title: "Quality Products",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
            icon: <FaPenToSquare/>,
            delay: 0.7,
          },
          {
            id: 3,
            title: "Affordable Price",
            description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            icon: <BiSolidDollarCircle />,
            delay: 0.9,
          },
    ]
  return (
    <section id="services" className='py-20 container'>
        <div className='flex flex-col items-center md:pb-0 pb-8'>
            <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.3}} className='text-4xl font-bold font-playfair pb-3'>What we provide</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} className='text-sm pb-5 text-center md:w-[400px]'>Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                items.map((element) =>(
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: element.delay}} key={element.id} className="border-[1px] p-5 py-10 flex flex-col gap-4 border-slate-400 md:w-[400px] hover:bg-black hover:text-white duration-300 hover:feature_box_hover hover:border-black">
                        <div className="size-12 flex justify-center items-center">
                            <span className="border-[1px] rounded-full p-3 text-xl border-black">{element.icon}</span>
                        </div>
                        <h1 className="text-2xl font-bold font-playfair">{element.title}</h1>
                        <p className="text-xs text-slate-400">{element.description}</p>
                        <h3 className="border-b-[1px] w-28 pb-1 cursor-pointer border-black">Learn More</h3>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default Features
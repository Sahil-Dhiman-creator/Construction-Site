import React from 'react'
import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
const About = () => {
  return (
    <div
      className='lg:h-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
                justify-between items-start gap-[50px]'
      id='about'>
        <motion.div
          initial='hidden'
          whileInView={'visible'}
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
            <motion.h1
              variants={slideUpVariants}
              className='text-yellow-500 text--2xl'
            >
              WELCOME TO
            </motion.h1>

            <motion.h1
              variants={slideUpVariants}
              className='text-white uppercase text-[40px] font-bold'
            >
              Vishal Construction
            </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-3xl italic text-gray-50 mt-[60px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Corrupti cupiditate facere itaque ullam blanditiis nulla 
            molestiae dolore ab minus unde numquam doloribus rerum, quo 
            vel possimus rem? Velit, ratione id?
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView={'visible'}
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
            <p
              className='text-white text-lg text-justify'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Eaque provident hic quam nesciunt libero omnis optio aspernatur 
              a, ut molestiae molestias eligendi quos inventore! Repudiandae 
              consequatur nesciunt cupiditate dicta provident. Omnis error, 
              odit harum libero dolores obcaecati nihil eius, aperiam soluta 
              suscipit accusamus recusandae? Rerum aliquid at nemo laudantium quos 
              soluta et, vel officia, a voluptatem voluptate eos eum culpa quod 
              corporis eius est impedit praesentium. Quae praesentium inventore quo
              quis ducimus vitae minus voluptatem qui! Illo at suscipit obcaecati 
              quo, explicabo alias? Quasi sapiente quis esse facilis perspiciatis 
              officiis repellat tenetur iusto, harum accusamus culpa repellendus, 
              reprehenderit unde ratione.
            </p>

            <motion.button
              variants={zoomInVariants}
              className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'
            >
              READ MORE
            </motion.button>
        </motion.div>
      </div>
  )
}

export default About
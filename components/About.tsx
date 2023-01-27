import { motion } from 'framer-motion'
import React from 'react'




type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center'>
            <h3 className='md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  '>
                About
            </h3>
            <motion.img
                className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}
                src='https://m.media-amazon.com/images/M/MV5BZTQ0NGI1MDctMTZlNy00NDc5LWI4ZDItYjBiYWE5MWY0ZDBlXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#f7ab0a]/50 '>little</span>{" "}background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Pharetra diam sit amet nisl suscipit adipiscing. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus.
                    Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Id aliquet risus feugiat in ante.
                    Faucibus a pellentesque sit amet porttitor eget dolor. Ut etiam sit amet nisl.
                    Purus non enim praesent elementum. Elit at imperdiet dui accumsan sit amet.
                    Eu lobortis elementum nibh tellus. Blandit aliquam etiam erat velit.
                    Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                    Duis ultricies lacus sed turpis tincidunt id aliquet. Nam aliquam sem et tortor consequat.
                    Lobortis feugiat vivamus at augue. Blandit massa enim nec dui nunc mattis enim ut tellus.
                    Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
                    Aenean et tortor at risus viverra adipiscing at in tellus.
                    Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.
                </p>
            </div>
        </motion.div>
    )
}

export default About





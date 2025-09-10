import { motion } from 'framer-motion'
import React from 'react'

function Title({ title }: { title: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='inline-flex items-center px-3 sm:px-4 py-2 rounded-full border border-[#0F8CA0]/20 bg-white/60 text-xs cursor-pointer sm:text-sm text-gray-100 backdrop-blur-sm shadow-sm hover:bg-white/80 hover:shadow-md hover:text-[#0F8CA0] mb-2 transition-all duration-300'
        >
            <span className='w-2 h-2 bg-[#0F8CA0] rounded-full mr-2 animate-pulse'></span>
            {title}
        </motion.div>
    )
}

export default Title

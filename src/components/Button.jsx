import { motion } from "framer-motion"

function Button({children, ...props}) {
  return (
    <motion.button layout {...props} className='bg-cyan-500 px-4 py-2 rounded-lg text-white mb-5'>
      {children}
    </motion.button>
  )
}

export default Button

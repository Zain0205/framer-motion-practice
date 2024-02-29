import { motion } from "framer-motion";

function Gestures() {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-black">
      <motion.button
        whileHover={{
          scale: 1.15,
        }}
        whileTap={{
          scale: 0.9,
          rotate: '2.3deg'
        }}
        className="bg-cyan-600 px-5 py-2 rounded-full font-semibold text-white"
      >
        Example Button
      </motion.button>
    </div>
  );
}

export default Gestures;

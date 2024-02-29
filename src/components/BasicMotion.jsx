import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useState } from "react";

function BasicMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <Button layout onClick={() => setIsVisible(!isVisible)}>
          Show / Hide
        </Button>
        <AnimatePresence mode="popLayout">
          {!isVisible && (
            <div className="flex items-center justify-center flex-col">
              <motion.div
                initial={{
                  // rotate: "0deg",
                  opacity: 0,
                  // y: 0,
                  x: -20,
                }}
                animate={{
                  // rotate: "180deg",
                  // scale: 1,
                  opacity: 1,
                  // y: 150,
                  x: 0,
                }}
                exit={{
                  // rotate: "0deg",
                  // scale: 0,
                  opacity: 0,
                  // y: 0,
                  x: -30,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="h-[150px] w-[150px] bg-black text-white flex items-center justify-center"
              >
                This is a box
              </motion.div>
              {!isVisible && (
                <motion.button
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="bg-sky-600 px-4 py-2 rounded-lg text-white mt-5"
                >
                  Some Button
                </motion.button>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default BasicMotion;

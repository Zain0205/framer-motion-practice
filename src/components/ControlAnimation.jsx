import { useState } from "react";
import Button from "./Button";
import { motion, useAnimationControls } from "framer-motion";

function ControlAnimation() {
  const [isFliped, setIsFliped] = useState(false)
  const control = useAnimationControls()

  const handleClick = () => {
    control.start(!isFliped ? "flip" : "back")
    setIsFliped(!isFliped)
  }



  return (
    <div className="h-screen bg-black flex items-center flex-col justify-center">
      <Button onClick={handleClick}>Flip Animation</Button>

      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "180deg",
          },
          back: {
            rotate: "0deg"
          }
        }}

        initial="initial"
        animate={control}
        className="h-[150px] w-[150px] bg-white flex items-center justify-center"
      >
        Flip me
      </motion.div>
    </div>
  );
}

export default ControlAnimation;

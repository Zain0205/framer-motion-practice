import Button from "./Button";
import { motion, useAnimationControls } from "framer-motion";

function ControlAnimation() {
  const control = useAnimationControls()

  const handleClick = () => {
    control.start("flip")
  }

  const handleBack = () => {
    control.start("back")
  }



  return (
    <div className="h-screen bg-black flex items-center flex-col justify-center">
      <Button onClick={handleClick}>Flip The Box</Button>
      <Button onClick={handleBack}>Test</Button>

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

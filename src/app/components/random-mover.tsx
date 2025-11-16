import { motion, useAnimation } from "framer-motion";
import stratalogo from "../../../public/pic/bg-strata-logo.png";
import { useEffect, useRef } from "react";
import Image from "next/image";
const MotionImage = motion.create(Image);

export default function RandomMover(){
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;

    if (!container) return;

    const moveRandomly = async () => {
      while (true) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        // keep the 40px image inside the box
        const x = Math.random() * (containerWidth - 1);
        const y = Math.random() * (containerHeight - 1);

        await controls.start({
          x,
          y,
          transition: { duration: 2, ease: "linear" },
        });
      }
    };

    moveRandomly();
  }, [controls]);


    return(
        <div ref={ref} className="fixed w-[100%] h-[100%] top-0 place-self-center overflow-hidden">
            <MotionImage
                src={stratalogo}
                className="size-10 sm:size-12 md:size-15 lg:size-20 absolute"
                animate={controls}
                alt="strata logo" 
                loading="lazy"
            />
        </div>
    )
}
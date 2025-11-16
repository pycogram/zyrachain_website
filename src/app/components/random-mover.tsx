import { motion, useAnimation } from "framer-motion";
import stratalogo from "../../../public/pic/bg-strata-logo.png";
import { useEffect } from "react";
import Image from "next/image";
const MotionImage = motion.create(Image);

export default function RandomMover(){
    const controls = useAnimation();
    const margin = 50;

    useEffect(() => {
        const moveRandomly = async () => {
        while(true){
            // const x = Math.random() * window.innerWidth - 50;
            const x = Math.random() * (window.innerWidth - margin * 2 - 50);
            const y = Math.random() * (window.innerWidth - margin * 2- 50);

            await controls.start({
            x, 
            y,
            transition: {
                duration: 2, 
                ease: "linear"
            },
            });
        }
        };
        moveRandomly();
    }, []);

    return(
        <MotionImage
            src={stratalogo}
            className="size-15 absolute"
            animate={controls}
            alt="strata logo" 
            loading="lazy"
        />
    )
}
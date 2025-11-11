"use client";

import { motion} from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode
}

export default function MotionWrapper({
  children
}: MotionWrapperProps) {
  return (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{y: 0, opacity: 1}}
        transition={{
            duration: 0.2,
            delay: 0.2,
            type: "spring",
            stiffness: 100
        }}
        animate={{ scale: 1 }}

        // viewport={{ once: true, amount: 0.2 }}
        // className={className}
        // {...motionProps} // allows custom overrides
    >
      {children}
    </motion.div>
  );
}

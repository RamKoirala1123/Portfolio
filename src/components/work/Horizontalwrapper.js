import React, { useRef } from "react";
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";

const HorizontalWrapper = ({ children, direction, height }) => {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end","end start"]
  });
  const xTransform = useTransform(scrollYProgress, [0,0, 1], [0, 0, direction]);

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          left:'-780px',
          position: "relative",
          x: xTransform,  
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalWrapper;

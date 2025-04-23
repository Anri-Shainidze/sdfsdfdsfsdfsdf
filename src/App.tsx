import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-10deg", "0deg"]);

  return (
    <div style={{ height: "200vh", paddingTop: "100vh" }}>
      <motion.div
        ref={ref}
        style={{
          y,
          opacity,
          scale,
          rotate,
          background: "tomato",
          height: 200,
          width: 300,
          margin: "0 auto",
          borderRadius: 20,
        }}
      >
        aleko here bro
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;


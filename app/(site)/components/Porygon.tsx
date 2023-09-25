import clsx from 'clsx';
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Porygon = () => {

  const [clicked, setClicked] = useState(false);
    
  const porygon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"

    },
    visible: {
      pathLength: 1,
    },
    hover: (fill: string) => ({
      fill: fill,
      pathLength: 1,
      cursor: "grab",
    }),
    clicked: (fill: string) => ({
      fill: fill,
      pathLength: 1,
    }),
  };

  return (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="397.5px"
        height="354px"
        viewBox="0.0 0.05 264.75 235.95"
        className={clsx("w-1/2 lg:w-[80%]", { "porygon" : !clicked })}
        variants={porygon}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setClicked(true)}
    >
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M1.6 46.95 L5.0 46.65 Q8.05 46.55 8.3 46.7 L47.2 88.2 85.85 129.6 79.95 170.95 54.5 165.95 0.0 51.9 Q1.25 47.25 1.6 46.95"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#60c0bd" d="M2.35 48.15 L7.25 47.85 83.6 131.15 76.45 166.8 52.45 156.05 1.45 51.55 2.35 48.15"
            variants={porygon}
            custom={"#60c0bd"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#a0d7e5" d="M7.25 47.85 L24.05 66.25 30.55 93.65 Q29.15 91.65 25.6 89.65 21.65 87.45 19.1 87.75 L1.45 51.55 2.35 48.15 7.25 47.85"
            variants={porygon}
            custom={"#a0d7e5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#82cbd1" d="M7.25 47.85 L83.6 131.15 76.45 166.8 73.75 165.6 5.1 51.55 Q4.4 50.7 4.55 49.6 4.65 48.6 5.45 47.95 L7.25 47.85"
            variants={porygon}
            custom={"#82cbd1"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#d2ecfa" d="M7.25 47.85 L53.95 98.8 Q47.8 94.0 37.4 88.2 26.1 81.95 24.55 83.1 L24.2 83.25 5.1 51.55 Q4.4 50.7 4.55 49.6 4.65 48.6 5.45 47.95 L7.25 47.85"
            variants={porygon}
            custom={"#d2ecfa"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M6.25 52.6 L70.9 156.1 Q71.25 156.65 71.1 157.25 70.95 157.85 70.4 158.2 L69.25 158.4 Q68.65 158.25 68.3 157.7 L5.6 53.15 Q4.9 51.95 5.2 51.65 5.5 51.35 6.25 52.6"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M193.9 153.65 Q236.7 186.25 237.5 187.35 238.0 188.0 244.1 205.5 250.25 223.15 250.1 223.9 250.05 224.5 245.6 229.95 241.2 235.35 240.55 235.65 239.9 236.0 209.95 230.0 L182.4 222.65 Q155.7 215.35 154.4 214.35 153.2 213.35 150.35 198.65 L165.95 162.05 193.9 153.65"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#a0d7e5" d="M198.15 160.75 L234.9 188.7 246.65 220.6 247.05 222.6 Q247.05 223.85 246.2 223.45 L221.4 213.3 189.4 166.15 198.15 160.75"
            variants={porygon}
            custom={"#a0d7e5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#60c0bd" d="M220.85 215.45 Q221.1 215.4 233.5 220.45 L245.8 225.5 239.55 233.25 225.95 230.4 212.35 227.3 216.45 221.4 Q220.6 215.55 220.85 215.45"
            variants={porygon}
            custom={"#60c0bd"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#52a7a5" d="M155.95 212.55 Q155.45 212.05 153.0 198.9 L187.7 167.9 Q219.15 214.1 219.1 214.45 L209.7 226.75 Q208.9 226.9 183.05 220.2 156.9 213.45 155.95 212.55"
            variants={porygon}
            custom={"#52a7a5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M177.6 196.15 Q176.05 198.05 173.65 198.7 L117.85 211.4 Q117.1 211.6 113.7 210.4 110.4 209.3 109.75 208.8 L78.3 180.8 73.3 159.4 Q68.35 137.75 68.65 136.45 69.0 134.7 98.9 108.8 L129.35 82.65 130.7 81.25 Q131.6 80.45 132.55 80.4 168.85 79.8 170.25 80.55 171.7 81.4 196.65 108.25 222.15 135.65 222.15 137.45 222.15 138.75 200.1 167.3 L177.6 196.15"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#d2ecfa" d="M168.05 82.35 Q169.25 82.35 169.75 82.9 L218.5 136.5 Q219.15 137.4 218.7 138.05 L218.65 138.1 218.65 138.15 175.8 194.2 Q175.2 195.1 174.15 195.1 L159.55 194.95 145.35 194.75 Q145.15 194.6 144.85 125.65 L138.55 116.25 132.2 106.7 Q132.15 106.4 138.7 94.3 145.2 82.15 145.45 82.0 145.7 81.85 156.7 82.05 L168.05 82.35"
            variants={porygon}
            custom={"#d2ecfa"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#82cbd1" d="M174.0 105.2 Q192.35 115.75 210.9 135.0 L144.65 125.35 Q132.25 107.1 132.2 106.7 132.2 106.2 139.65 92.55 157.3 95.6 174.0 105.2"
            variants={porygon}
            custom={"#82cbd1"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#d2ecfa" d="M168.05 82.35 Q169.25 82.35 169.75 82.9 L218.5 136.5 218.85 137.25 210.9 135.0 Q192.35 115.75 174.0 105.2 157.3 95.6 139.65 92.55 145.1 82.25 145.45 82.0 145.7 81.85 156.7 82.05 L168.05 82.35"
            variants={porygon}
            custom={"#d2ecfa"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#60c0bd" d="M175.8 194.2 Q175.2 195.1 174.15 195.1 L159.55 194.95 145.35 194.75 Q145.15 194.6 144.85 125.65 L144.65 125.35 180.7 130.6 Q195.15 140.6 202.85 158.85 L175.8 194.2"
            variants={porygon}
            custom={"#60c0bd"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#bbe2f1" d="M218.85 137.25 Q218.95 137.75 218.7 138.05 L218.65 138.1 218.65 138.15 202.85 158.85 Q195.15 140.6 180.7 130.6 L210.9 135.0 218.85 137.25"
            variants={porygon}
            custom={"#bbe2f1"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#eb6d80" d="M141.0 82.55 Q142.15 82.55 141.7 83.4 L129.9 104.6 Q129.1 106.15 129.1 106.9 129.15 107.75 130.2 108.85 L135.9 117.15 141.25 125.25 Q142.0 126.75 142.0 127.65 L142.55 193.55 Q142.6 194.5 142.3 194.95 L141.35 195.65 126.15 201.5 111.0 207.05 Q110.6 207.05 81.55 180.25 80.5 179.05 80.25 177.8 L72.15 138.4 Q71.7 136.5 73.0 135.25 L130.45 84.5 Q130.75 84.15 131.75 84.0 L133.2 83.8 136.75 83.15 141.0 82.55"
            variants={porygon}
            custom={"#eb6d80"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f6c7ce" d="M142.0 127.65 L142.2 158.2 Q137.25 146.1 124.4 138.55 111.2 130.8 98.35 133.45 L98.35 133.0 141.6 126.15 142.0 127.65"
            variants={porygon}
            custom={"#f6c7ce"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f3b1b9" d="M133.1 98.85 L129.9 104.6 Q129.15 106.05 129.2 106.8 129.25 107.55 130.2 108.85 L135.7 116.85 141.25 125.25 141.6 126.15 72.05 137.15 72.1 136.75 72.15 136.7 72.25 136.3 72.3 136.2 72.6 135.7 73.0 135.25 122.9 91.25 Q126.1 91.65 128.9 93.45 132.35 95.65 133.1 98.85"
            variants={porygon}
            custom={"#f3b1b9"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f09ba5" d="M141.0 82.55 L142.05 82.45 141.7 83.4 133.1 98.85 Q132.35 95.65 128.9 93.45 126.1 91.65 122.9 91.25 L129.1 85.7 129.25 85.6 130.45 84.5 Q130.75 84.15 131.75 84.0 L133.2 83.8 141.0 82.55"
            variants={porygon}
            custom={"#f09ba5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M213.3 134.9 Q215.5 135.2 215.4 136.15 215.3 137.05 213.1 136.75 156.95 128.85 150.9 127.2 147.95 126.4 148.1 125.45 148.25 124.55 151.3 125.1 L213.3 134.9"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M75.35 137.1 Q73.95 137.25 73.6 136.75 73.25 136.2 75.15 135.9 L135.3 125.95 Q137.65 125.7 137.95 126.55 138.3 127.4 135.75 127.95 L75.35 137.1"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#cb5e71" d="M117.25 209.3 L114.8 208.55 Q143.85 197.15 144.45 197.15 L168.95 197.75 117.25 209.3"
            variants={porygon}
            custom={"#cb5e71"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M29.45 175.8 L43.75 159.4 Q57.35 143.95 57.75 143.9 58.25 143.8 93.15 157.2 128.1 170.65 128.55 171.25 129.25 172.1 127.7 184.35 126.1 196.45 125.45 197.1 124.3 198.2 77.0 215.15 L50.0 218.75 23.2 222.1 Q22.7 222.0 16.95 217.9 11.0 213.7 11.0 213.1 11.0 212.4 19.9 194.55 L29.45 175.8"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#a0d7e5" d="M78.4 192.15 L33.4 175.9 58.45 146.8 125.6 172.35 78.4 192.15"
            variants={porygon}
            custom={"#a0d7e5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#d2ecfa" d="M46.95 160.15 L58.45 146.8 125.6 172.35 107.2 180.1 Q100.6 170.85 83.85 165.3 67.0 159.65 46.95 160.15"
            variants={porygon}
            custom={"#d2ecfa"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#60c0bd" d="M123.05 195.4 L78.4 212.25 79.45 194.2 125.75 174.85 123.05 195.4"
            variants={porygon}
            custom={"#60c0bd"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#82cbd1" d="M116.4 197.9 Q118.05 193.55 113.85 189.85 109.95 186.35 102.45 184.6 L125.75 174.85 123.05 195.4 116.4 197.9"
            variants={porygon}
            custom={"#82cbd1"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#60c0bd" d="M77.05 194.3 L76.05 212.8 23.8 219.35 13.95 212.75 31.85 178.2 77.05 194.3"
            variants={porygon}
            custom={"#60c0bd"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M143.95 81.25 Q143.95 80.85 145.2 80.8 146.4 80.7 146.4 81.1 L144.8 120.0 Q144.75 121.95 144.15 121.95 143.5 121.95 143.55 120.0 L143.95 81.25"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#eb6d80" d="M185.2 52.2 L178.1 63.0 174.55 84.35 221.05 85.2 156.55 87.75 94.4 74.95 82.1 34.85 100.95 4.85 152.85 1.0 198.5 20.7 241.25 54.4 185.2 52.2"
            variants={porygon}
            custom={"#eb6d80"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#eeeeef" d="M127.25 20.15 L127.7 21.2 157.95 36.9 152.7 52.9 151.6 52.0 115.75 37.9 127.25 20.15"
            variants={porygon}
            custom={"#eeeeef"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#ffffff" d="M127.25 20.15 L149.25 21.85 157.95 36.9 127.7 21.2 127.25 20.15"
            variants={porygon}
            custom={"#ffffff"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#dbdcdc" d="M151.6 52.0 L152.7 52.9 129.85 57.4 115.75 37.9 151.6 52.0"
            variants={porygon}
            custom={"#dbdcdc"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#60c0bd" d="M263.75 72.4 L263.45 78.5 237.55 85.15 174.55 84.35 178.1 63.0 185.2 52.2 240.9 53.95 263.75 72.4"
            variants={porygon}
            custom={"#60c0bd"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#82cbd1" d="M178.1 63.0 L184.85 51.95 216.25 69.55 215.75 77.75 178.1 63.0"
            variants={porygon}
            custom={"#82cbd1"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#a0d7e5" d="M216.25 69.55 L185.2 52.2 240.9 53.95 263.75 72.4 216.25 69.55"
            variants={porygon}
            custom={"#a0d7e5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f3b1b9" d="M198.5 20.7 L241.25 54.4 185.2 52.2 158.1 37.4 149.3 21.85 127.5 19.9 100.95 4.85 152.85 1.0 198.5 20.7"
            variants={porygon}
            custom={"#f3b1b9"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f6c7ce" d="M240.6 54.05 L236.0 54.0 196.1 27.6 152.65 7.65 100.95 4.85 152.85 1.0 198.5 20.7 240.6 54.05"
            variants={porygon}
            custom={"#f6c7ce"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#d2ecfa" d="M236.0 54.0 L240.6 54.05 263.75 72.4 236.0 54.0"
            variants={porygon}
            custom={"#d2ecfa"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f09ba5" d="M185.2 52.2 L178.1 63.0 152.7 52.9 158.1 37.4 185.2 52.2"
            variants={porygon}
            custom={"#f09ba5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#f09ba5" d="M116.0 37.55 L81.8 35.3 100.7 4.75 127.5 19.9 116.0 37.55"
            variants={porygon}
            custom={"#f09ba5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#52a7a5" d="M175.65 84.15 L216.4 77.85 263.45 78.5 237.55 85.15 175.65 84.15"
            variants={porygon}
            custom={"#52a7a5"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#cb5e71" d="M175.2 84.3 L212.4 85.75 159.15 87.45 175.2 84.3"
            variants={porygon}
            custom={"#cb5e71"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M262.5 78.1 L262.65 72.65 197.85 21.6 152.65 2.4 101.45 5.5 83.15 35.5 95.55 74.1 156.85 86.6 237.45 84.0 262.5 78.1 M264.1 71.2 Q264.75 71.7 264.7 72.85 L264.5 78.75 Q264.45 79.55 263.65 79.75 L237.8 86.15 157.3 88.8 155.85 88.75 94.4 76.55 Q93.55 76.35 93.15 75.2 L81.0 36.15 Q80.7 34.95 81.1 34.3 L99.55 4.7 100.25 3.95 101.5 3.7 151.7 0.05 154.2 0.35 199.0 19.75 264.1 71.2"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M116.85 36.5 L115.9 38.65 82.1 36.6 82.15 34.45 116.85 36.5"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M263.55 71.75 L263.8 73.5 216.1 70.5 215.9 70.45 158.1 38.2 158.35 35.85 216.45 68.5 263.55 71.75"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M131.3 20.9 L126.3 20.65 99.95 5.85 101.95 4.25 131.3 20.9"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M137.25 22.1 L127.7 21.2 122.25 29.7 116.75 38.25 123.4 47.15 130.05 56.0 151.6 52.0 153.4 47.2 156.75 37.4 Q151.45 27.8 148.65 23.35 L137.25 22.1 M150.1 21.25 L150.75 22.05 159.15 37.4 153.5 52.9 Q153.4 53.7 152.6 53.9 L129.8 58.55 Q128.8 58.7 128.5 58.05 L114.6 38.5 Q114.3 37.9 114.85 37.4 L126.5 19.25 Q127.0 18.85 127.85 19.05 L149.3 21.05 150.1 21.25"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M175.65 84.15 L173.4 84.6 177.1 62.4 177.15 62.25 183.1 51.5 Q183.45 50.9 184.15 50.9 L240.15 53.4 242.3 55.3 185.6 53.15 179.35 63.2 175.65 84.15"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M214.7 77.25 L215.05 69.0 217.0 69.55 216.8 77.7 Q216.7 78.9 215.8 79.0 L159.75 87.65 153.2 87.0 214.7 77.25"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M169.65 85.2 L180.0 83.6 237.45 84.0 228.9 85.4 169.65 85.2"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M263.8 77.75 L262.65 79.4 216.0 79.05 215.8 79.0 151.1 53.5 152.9 51.65 215.9 77.0 263.8 77.75"
            variants={porygon}
            custom={"#0d131a"}
            fillOpacity={0.0}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
        <motion.path
            strokeDasharray="0 1"
            fill="#0d131a" d="M138.7 33.8 Q140.15 33.7 141.45 34.95 142.85 36.25 142.8 37.95 142.75 40.0 141.55 41.15 140.4 42.2 138.55 42.2 137.05 42.2 135.9 40.95 134.8 39.7 134.85 38.1 134.9 36.1 136.05 34.95 137.05 33.9 138.7 33.8"
            variants={porygon}
            custom={"#0d131a"}
            initial="hidden"
            animate={clicked ? "clicked" : "visible"}
            whileHover="hover"
            drag
            dragConstraints={{
              top: -15,
              right: 15,
              bottom: 15,
              left: -15,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: 1.1, outline: "none", border: "none", boxShadow: "none" }}
            transition={{
              pathLength: { duration: 10, ease: "easeInOut" },
              fill: { duration: 0.3, ease: [1, 0, 0.8, 1] },
        }}/>
                        
    </motion.svg>
  )
}

export default Porygon
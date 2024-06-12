"use client";
import React from "react";

import useScrollProgress from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

interface TemplateProps {
  children?: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.5, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
}

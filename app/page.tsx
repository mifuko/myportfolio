"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import BlogPage from "./blog/page";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // 背景移动
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "-40%"]);
  
  // 背景渐变叠加
  const bgOverlayOpacity = useTransform(scrollY, [300, 900], [0, 1]);
  
  // 第一屏内容淡出
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <main ref={ref} className="relative w-full overflow-x-hidden text-white">
      {/* === 背景层 === */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: "url('/day1bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="fixed top-0 left-0 w-full h-full z-0"
      />
      
      {/* 渐变过渡遮罩 */}
      <motion.div
        style={{ opacity: bgOverlayOpacity }}
        className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
      >
        <div 
          className="w-full h-full" 
          style={{
            background: "linear-gradient(to bottom, rgba(250,250,250,0) 0%, rgba(250,250,250,0.6) 30%, rgba(250,250,250,0.9) 60%, rgb(250,250,250) 100%)"
          }}
        />
      </motion.div>

      {/* === 第一屏（Hero Section） === */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative h-screen flex flex-col items-center justify-center z-20 text-center"
      >
        <Navbar />
        <h1 className="text-6xl font-bold text-white mb-4 typing-text">
          Hi, I'm Nightmare Walker 👋
        </h1>
        <p className="text-xl max-w-md mx-auto leading-relaxed">
          Exploring code, creativity, and the world of Web3.
        </p>
        <a href="#blog" className="absolute bottom-10 animate-bounce text-sm opacity-75">
          Scroll ↓
        </a>
      </motion.section>

      {/* === Blog Section === */}
      <section
        id="blog"
        className="relative z-30"
      >
        <BlogPage />
      </section>
    </main>
  );
}

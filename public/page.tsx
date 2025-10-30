"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import BlogPage from "./blog/page";

export default function Home() {
  // 监听全局滚动进度（Framer Motion）
  const { scrollYProgress } = useScroll();

  // 图片上移（0% -> 50% 滚动）
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  // 封面淡出
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Blog 渐显
  const blogOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const blogY = useTransform(scrollYProgress, [0.3, 0.6], ["20%", "0%"]);

  return (
    <main className="w-full min-h-[200vh] text-white scroll-smooth overflow-x-hidden">
      {/* 第一屏：封面 */}
      <motion.section
        className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/day1bg.png')",
          y,
          opacity,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <Navbar />
        <div className="relative z-10 p-8 rounded-2xl text-center backdrop-blur-sm">
          <h1 className="text-6xl font-bold mb-6">Hi, I’m Kidoris 👋</h1>
          <p className="text-xl max-w-md leading-relaxed">
            Exploring code, creativity, and the world of Web3.
          </p>
          <a
            href="#blog"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-sm opacity-75 hover:opacity-100 transition"
          >
            Scroll ↓
          </a>
        </div>

        {/* 渐变遮罩，让过渡更柔和 */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
      </motion.section>

      {/* 第二屏：博客区块 */}
      <motion.section
        id="blog"
        className="bg-white text-black min-h-screen pt-[100vh]"
        style={{
          opacity: blogOpacity,
          y: blogY,
        }}
      >
        <BlogPage />
      </motion.section>
    </main>
  );
}


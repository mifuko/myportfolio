"use client";

import Navbar from "./components/Navbar";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <main className="w-full min-h-[200vh] text-white scroll-smooth">
      {/* 第一屏：封面 */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/day1bg.png')" }}
      >
        <Navbar />
        <div className="bg-black bg-opacity-50 p-8 rounded-2xl text-center">
          <h1 className="text-6xl font-bold mb-6">Hi, I’m Kidoris 👋</h1>
          <p className="text-xl max-w-md leading-relaxed">
            Exploring code, creativity, and the world of Web3.
          </p>
          <a
            href="#blog"
            className="absolute bottom-10 animate-bounce text-sm opacity-75 hover:opacity-100 transition"
          >
            Scroll ↓
          </a>
        </div>
      </section>

      {/* 第二屏：博客区块 */}
      <section id="blog" className="bg-white text-black min-h-screen">
        <BlogPage />
      </section>
    </main>
  );
}



"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 right-0 p-6 flex gap-8 text-lg font-medium text-white z-10">
      <Link href="/blog" className="hover:underline">BLOG</Link>
      <Link href="/projects" className="hover:underline">PROJECTS</Link>
      <Link href="/contact" className="hover:underline">CONTACT</Link>
    </nav>
  );
}


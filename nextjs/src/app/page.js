"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText =
    "$ whoami\n" +
    "Engineer / Fullstack Developer / OSS Enthusiast\n\n" +
    "$ bio\n" +
    "- Specializes in AI, OSS, Cloud, Container, ETL\n" +
    "- Building data platforms & engineering pipelines\n\n" +
    "$ projects --latest\n" +
    "1. Logistics Data Platform (Airflow + Docker + MySQL)\n" +
    "2. OSS-based Time Management System\n" +
    "3. AI-driven Automation Tools\n\n" +
    "$ contact\n" +
    "github: https://github.com/yourname\n" +
    "x:      https://x.com/yourname\n";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="max-w-3xl mx-auto mt-20 border border-green-500 rounded-md p-6 shadow-xl bg-black/70">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-3 text-sm text-green-300">terminal — engineer@home</span>
        </div>

        {/* Typing Output */}
        <pre className="whitespace-pre-wrap text-sm leading-relaxed">
          {text}
        </pre>

        {/* Blinking Cursor */}
        <span className="animate-pulse">▮</span>
      </div>
    </main>
  );
}

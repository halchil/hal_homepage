"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const [showWhale, setShowWhale] = useState(false);
  const [whaleFrame, setWhaleFrame] = useState(0);

  const fullText =
    "$ whoami\n" +
    "Name:  Keita Haruyama 春山 慶太\nCareer:  Fullstack Engineer\nCurious:  OSS Development\n\n" +
    
    "$ biography\n" +
    "- Specializes in Building data platforms, Management, Data Analytics\n\n" +
    
    "$ projects --latest\n" +
    "2025/11. 運送業向けデータ構築基盤開発 Logistics Data Platform\n" +
    "2025/02. OSS-based Time Management System\n" +
    "2024/07. AI-driven Automation Tools in Manufacturing Company\n\n" +

    "$ contact\n" +
    "e-mail: halz.create1215@gmail.com\n" +
    "github: https://github.com/halchil\n" +
    "LinkedIn: https://www.linkedin.com/in/halchil\n";

  /* タイピング処理 */
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowWhale(true), 500); // 完了後に表示
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  /* カーソル点滅 */
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(timer);
  }, []);




  /* Docker Whale Swim Animation */
  const whaleFrames = [
`               ##         .
         ## ## ##        ==
      ## ## ## ## ##    ===
  /"""""""""""""""""\\\\___/ ===
 ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
  \\\\______ o           __/
    \\\\    \\\\         __/
     \\\\____\\\\_______/
`,

`               ##        .  
         ## ## ##       ===
      ## ## ## ## ##    == 
  /"""""""""""""""""\\\\___/ ==
 ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
  \\\\______ o         __/
    \\\\    \\\\      __/
     \\\\____\\\\____/
`
  ];

  useEffect(() => {
    if (!showWhale) return;

    const timer = setInterval(() => {
      setWhaleFrame(f => (f === 0 ? 1 : 0));
    }, 600); // 泳ぎ速度
    return () => clearInterval(timer);
  }, [showWhale]);

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-10">
      <div className="max-w-6xl mx-auto mt-12 border border-green-500 rounded-lg p-10 shadow-2xl bg-black/80">

        {/* Terminal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>

          <span className="ml-4 text-lg text-green-300">
            terminal — engineer@home
          </span>
        </div>

        {/* 左：タイピング → 右：くじら（後から表示） */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT */}
          <pre className="whitespace-pre-wrap text-lg leading-relaxed">
            {text}
            <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-2xl`}>
              ▮
            </span>
          </pre>

          {/* RIGHT（タイピング終了後に表示） */}
          {showWhale && (
            <pre className="text-green-500 opacity-90 text-base whitespace-pre-wrap">
{whaleFrames[whaleFrame]}
            </pre>
          )}

          

        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function BuildingAstra() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#ededed]">
      <div className="max-w-[600px] mx-auto px-6 pt-[20vh] pb-24 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Link href="/" className="text-[13px] text-[#666] hover:text-[#999] transition-colors mb-16 inline-block">
          ← Back
        </Link>

        <h1 className="text-[28px] font-medium text-[#ededed] mb-4 tracking-tight">
          Building Astra
        </h1>

        <p className="text-[13px] text-[#666] mb-16">March 2026</p>

        <div className="text-[15px] leading-[1.8] text-[#999] space-y-8">
          <p>
            Astra is a conversational CLI for codebase analysis and autonomous refactoring. 
            It&apos;s the tool I wished existed when I started working on large codebases — 
            something that could understand your code semantically and help you reshape it.
          </p>

          <p>
            The idea came from frustration. Every time I joined a new project, I spent days 
            just reading code, trying to understand how everything connected. I thought: 
            what if a tool could do that for me?
          </p>

          <p>
            Astra works by building a persistent, local memory of your codebase. It parses 
            your code across multiple languages, understands the relationships between 
            modules, and lets you have a <em className="text-[#ededed]">conversation</em> about 
            your code instead of just searching through it.
          </p>

          <p>
            The hardest part has been making it fast. Parsing thousands of files, indexing 
            them, and keeping everything in sync as the codebase changes — that&apos;s where 
            Rust comes in. The core engine is built in Rust for performance, with a 
            Node.js layer on top for the conversational interface.
          </p>

          <p>
            Astra is still early. But every time I use it on a real project and it saves me 
            hours of manual work, I know I&apos;m building something worth finishing.
          </p>
        </div>
      </div>
    </main>
  );
}

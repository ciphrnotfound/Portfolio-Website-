import Link from "next/link";

export default function WhyIStartedCoding() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#ededed]">
      <div className="max-w-[600px] mx-auto px-6 pt-[20vh] pb-24 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Link href="/" className="text-[13px] text-[#666] hover:text-[#999] transition-colors mb-16 inline-block">
          ← Back
        </Link>

        <h1 className="text-[28px] font-medium text-[#ededed] mb-4 tracking-tight">
          Why I Started Coding
        </h1>

        <p className="text-[13px] text-[#666] mb-16">March 2026</p>

        <div className="text-[15px] leading-[1.8] text-[#999] space-y-8">
          <p>
            It started with curiosity. I was 11 years old and I wanted to understand how 
            the apps I used every day actually worked. So I googled it. And that single 
            search changed everything.
          </p>

          <p>
            The first language I touched was JavaScript. I didn&apos;t understand most of it, 
            but I understood enough to make a button change color on a webpage. That tiny 
            moment of creation — of telling a machine what to do and watching it listen — 
            was addictive.
          </p>

          <p>
            From there, I fell deep. HTML, CSS, React, Node, then Rust. Each new tool 
            opened a door to something bigger. I wasn&apos;t just learning to code. I was 
            learning to <em className="text-[#ededed]">think differently</em>.
          </p>

          <p>
            Coding gave me agency. Before, I was a consumer of technology. After, I was a 
            creator. I could take an idea in my head and make it real. That power is 
            intoxicating when you&apos;re a kid who wants to change things.
          </p>

          <p>
            Today, I write code every single day. Not because I have to, but because I 
            genuinely can&apos;t imagine doing anything else. Software engineering isn&apos;t 
            just my career — it&apos;s how I think, how I solve problems, and how I 
            express myself.
          </p>
        </div>
      </div>
    </main>
  );
}

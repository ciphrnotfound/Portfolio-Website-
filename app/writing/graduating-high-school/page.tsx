import Link from "next/link";

export default function GraduatingHighSchool() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#ededed]">
      <div className="max-w-[600px] mx-auto px-6 pt-[20vh] pb-24 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Link href="/" className="text-[13px] text-[#666] hover:text-[#999] transition-colors mb-16 inline-block">
          ← Back
        </Link>

        <h1 className="text-[28px] font-medium text-[#ededed] mb-4 tracking-tight">
          Graduating High School at 13
        </h1>

        <p className="text-[13px] text-[#666] mb-16">March 2026</p>

        <div className="text-[15px] leading-[1.8] text-[#999] space-y-8">
          <p>
            When I was 13, I walked across a stage and received my high school diploma. 
            Most people thought it was unusual. Some thought it was impressive. For me, it 
            was just the beginning.
          </p>

          <p>
            I didn&apos;t skip grades because I wanted to prove something. I did it because 
            I couldn&apos;t sit still. School moved too slowly. I wanted to build things, 
            learn things, and do something that actually mattered.
          </p>

          <p>
            The decision wasn&apos;t easy. Leaving behind friends, missing out on the &quot;normal&quot; 
            high school experience — those were real trade-offs. But I had already found what 
            I loved: <em className="text-[#ededed]">writing code</em>.
          </p>

          <p>
            Graduating early gave me a head start. Not just in terms of time, but in terms 
            of mindset. It taught me that the conventional path isn&apos;t the only path. 
            Sometimes the best thing you can do is move faster than everyone expects you to.
          </p>

          <p>
            Now, at 15, I&apos;m building startups, shipping products, and working with 
            teams of people twice my age. None of that would have been possible if I had 
            waited for permission to start.
          </p>
        </div>
      </div>
    </main>
  );
}

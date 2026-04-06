"use client";

export function LanguagesSection() {
  const languages = [
    'TypeScript',
    'JavaScript',
    'Python',
    'Go',
    'Next.js',
    'React',
    'Node.js',
    'Tailwind CSS',
    'Git',
    'Vercel',
    'Supabase',
    'Figma',
  ];

  return (
    <section className="max-w-[680px] mx-auto px-8 sm:px-10 md:px-6 py-24 animate-fade-in" data-section="languages">
      <h2 className="text-[15px] text-[#ededed] font-normal mb-5">Languages & Technologies</h2>
      
      {languages.length === 0 ? (
        <p className="text-[15px] text-[#888]">Technologies coming soon</p>
      ) : (
        <p className="text-[15px] leading-[1.8] text-[#888]">
          {languages.join(', ')}
        </p>
      )}
    </section>
  );
}

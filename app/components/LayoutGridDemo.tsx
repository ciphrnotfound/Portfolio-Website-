"use client";
import Link from "next/link";

interface Item {
  id: string;
  title: string;
  desc: string;
  link?: string;
  external?: boolean;
  divider?: boolean;
}

interface Column {
  label: string;
  items: Item[];
}

const columns: Column[] = [
  {
    label: "Building",
    items: [
      { id: "c1", title: "Clara", desc: "Personal AI assistant for managing digital life through conversational interfaces.", link: "#", external: true },
      { id: "c2", title: "BotHive", desc: "Platform for building conversational AI agents and intelligent automation tools.", link: "https://bothive.cloud", external: true },
      { id: "c3", title: "Astra", desc: "Conversational CLI for codebase analysis and autonomous refactoring.", link: "#", external: true },
    ],
  },
  {
    label: "Projects",
    items: [
      { id: "p1", title: "Watchup", desc: "Lead Frontend Engineer building modern web experiences with Next.js and React.", link: "https://watchup.site", external: true },
      { id: "p2", title: "pxxl space", desc: "Frontend Developer creating creative digital experiences and interactive interfaces.", link: "https://pxxl.app", external: true },
    ],
  },
  {
    label: "Writing",
    items: [
      { id: "w1", title: "Graduating at 13", desc: "My unconventional path through early education and what it taught me.", link: "/writing/graduating-high-school" },
      { id: "w2", title: "Why I Code", desc: "From curiosity to career. How programming became my creative outlet.", link: "/writing/why-i-started-coding" },
      { id: "w3", title: "Building Astra", desc: "Lessons learned building an AI-powered developer tool.", link: "/writing/building-astra" },
      { id: "w4", title: "", desc: "", divider: true },
    ],
  },
];

function Cell({ item }: { item: Item }) {
  if (item.divider) {
    return <div className="py-4 border-b border-[#1a1a1a]"><div className="border-t border-[#222]"></div></div>;
  }

  const content = (
    <div className="group py-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[14px] text-[#ededed] group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
        {item.external && (
          <span className="text-[#666] text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
        )}
      </div>
      <p className="text-[13px] text-[#888] leading-[1.7]">{item.desc}</p>
    </div>
  );

  if (item.link) {
    return item.external ? (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block border-b border-[#1a1a1a] last:border-b-0 hover:opacity-70 transition-opacity duration-300">
        {content}
      </a>
    ) : (
      <Link href={item.link} className="block border-b border-[#1a1a1a] last:border-b-0 hover:opacity-70 transition-opacity duration-300">
        {content}
      </Link>
    );
  }

  return <div className="border-b border-[#1a1a1a] last:border-b-0">{content}</div>;
}

function Col({ column }: { column: Column }) {
  return (
    <div>
      <div className="text-[11px] text-[#888] mb-4">{column.label}</div>
      <div className="border-t border-[#1a1a1a]">
        {column.items.map((item) => (
          <Cell key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export function LayoutGridDemo() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {columns.map((col) => (
          <Col key={col.label} column={col} />
        ))}
      </div>
    </div>
  );
}

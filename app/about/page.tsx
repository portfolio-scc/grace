import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    'Project Management',
    'Public Relations',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking'
  ];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        About Me
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Profile
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Detail-oriented and passionate Computer Engineering graduate from General Trias, Cavite, with a strong commitment to enhancing technology's reliability for future generations. Skilled in problem-solving, system optimization, and innovative technological solutions. Dedicated to leveraging engineering principles and emerging technologies to create efficient and dependable systems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="flex items-center gap-2 px-4 py-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 rounded-lg"
            >
              <CheckCircle2 size={18} className="text-purple-700 dark:text-purple-300 shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

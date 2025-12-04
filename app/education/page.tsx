import { Award, Calendar, GraduationCap } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        Education
      </h1>

      <div className="space-y-8">
        {/* BS Computer Engineering */}
        <div className="p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <GraduationCap size={24} className="text-purple-700 dark:text-purple-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                BS Computer Engineering
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                Samuel Christian College of General Trias Inc.
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Calendar size={14} />
                <span>2022 – 2026</span>
              </div>
            </div>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Currently pursuing a Bachelor of Science degree in Computer Engineering, focusing on system optimization, problem-solving, and innovative technological solutions. Building a strong foundation in engineering principles and emerging technologies.
          </p>
        </div>

        {/* Senior High School */}
        <div className="p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Award size={24} className="text-purple-700 dark:text-purple-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                Senior High School
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                Samuel Christian College
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                <Calendar size={14} />
                <span>2020 – 2022</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-950 border border-purple-300 dark:border-purple-800 rounded-full">
                <Award size={14} className="text-purple-700 dark:text-purple-300" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">With Honors</span>
              </div>
            </div>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Graduated with honors, demonstrating strong academic performance and dedication to studies. This period laid the foundation for my passion in computer engineering and technology.
          </p>
        </div>
      </div>
    </div>
  );
}

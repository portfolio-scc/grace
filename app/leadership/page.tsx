import { Calendar, TrendingUp, Users } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        Organizations & Leadership
      </h1>

      <div className="space-y-8">
        {/* NSRP–NSRC PRO */}
        <div className="border border-purple-200 dark:border-purple-900 rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg">
                <TrendingUp size={24} className="text-purple-700 dark:text-purple-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  Public Relations Officer (PRO)
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  NSRP–NSRC
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Calendar size={14} />
                  <span>2025 – 2026</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Responsibilities:</h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Handled the organization's communication platforms and information dissemination.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Created promotional materials and increased visibility for school and community programs.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Strengthened partnerships through effective public relations and student engagement.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* NSTP–NSRC Vice President */}
        <div className="border border-purple-200 dark:border-purple-900 rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg">
                <Users size={24} className="text-purple-700 dark:text-purple-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  Vice President
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  NSTP–NSRC
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Calendar size={14} />
                  <span>2024 – 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Responsibilities:</h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Assisted the president in overseeing organization-wide projects and community service efforts.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Led initiatives focused on civic engagement, youth development, and disaster preparedness.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Coordinated with officers and members to ensure effective implementation of activities.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BSCPE Representative */}
        <div className="border border-purple-200 dark:border-purple-900 rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg">
                <Users size={24} className="text-purple-700 dark:text-purple-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  BSCPE Representative
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Computer Engineering Department
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Calendar size={14} />
                  <span>2023 – 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Responsibilities:</h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Served as a liaison between Computer Engineering students and the department.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Communicated concerns and updates to ensure smooth academic coordination.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Assisted in organizing departmental events, seminars, and student engagement initiatives.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

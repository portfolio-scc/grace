import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        Work Experience
      </h1>

      <div className="space-y-8">
        {/* McDonald's Crew Member */}
        <div className="border border-purple-200 dark:border-purple-900 rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg">
                <Briefcase size={24} className="text-purple-700 dark:text-purple-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  Crew Member
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  McDonald's Sunterra
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>September 2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>Sunterra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Key Responsibilities:</h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Assisted in food preparation and order accuracy while maintaining quality and safety standards.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Delivered fast and friendly customer service during high-volume hours.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Operated POS systems and supported front-counter operations.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Maintained cleanliness and organization of workstations and dining areas.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Enhanced teamwork and communication through consistent collaboration with staff.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Student Assistant */}
        <div className="border border-purple-200 dark:border-purple-900 rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg">
                <Briefcase size={24} className="text-purple-700 dark:text-purple-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  Student Assistant
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Samuel Christian College of General Trias Inc.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>2023 – 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>General Trias, Cavite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Key Responsibilities:</h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Provided administrative and technical support to faculty and staff, ensuring smooth daily operations.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Assisted in managing documents, organizing records, and responding to inquiries from students and visitors.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Developed strong multitasking skills by handling clerical tasks while maintaining academic responsibilities.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Gained experience in troubleshooting basic IT issues.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span>Strengthened problem-solving, communication, and time-management skills in a fast-paced environment.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

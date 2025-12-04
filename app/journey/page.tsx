import { Heart, Sparkles, Target } from 'lucide-react';

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        My SCC Journey
      </h1>

      <div className="space-y-8">
        <div className="p-6 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/50 border border-purple-200 dark:border-purple-800 rounded-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-white dark:bg-purple-900 rounded-lg">
              <Heart size={24} className="text-purple-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                A Transformative Chapter
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                My time at Samuel Christian College has been a transformative chapter in my academic and leadership development. From my senior high school years to pursuing my BS Computer Engineering degree, I embraced various responsibilities that strengthened my discipline, initiative, and commitment to service.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/50 border border-purple-200 dark:border-purple-800 rounded-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-white dark:bg-purple-900 rounded-lg">
              <Sparkles size={24} className="text-purple-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Leadership & Growth
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Serving as a BSCPE Representative, NSTP-NSRC Vice President, and eventually NSRP-NSRC PRO allowed me to practice leadership, teamwork, and communication in meaningful ways. These roles taught me the value of collaboration, empathy, and proactive involvement in student and community initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/50 border border-purple-200 dark:border-purple-800 rounded-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-white dark:bg-purple-900 rounded-lg">
              <Target size={24} className="text-purple-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Ready for the Future
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                My SCC journey reflects not only academic growth but also personal maturity, resilience, and a deepened passion for contributing to my school and community. The experiences I gained molded me into a more confident, capable, and compassionate individual—ready to take on greater challenges as a future computer engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Key Learnings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Discipline</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Building strong work ethics and commitment</p>
            </div>
            <div className="p-4 bg-white dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Initiative</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Taking proactive steps in leadership</p>
            </div>
            <div className="p-4 bg-white dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Service</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Commitment to community and school</p>
            </div>
            <div className="p-4 bg-white dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Resilience</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Overcoming challenges with determination</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

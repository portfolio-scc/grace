import { Facebook, Instagram, Mail, MapPin, Music, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <header className="mb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6 mb-6">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Grace B. Paredes
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              BS Computer Engineer
            </p>
          </div>
         
        </div>
        
        <div className="mt-6 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+639-928-230-397</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:hrace102304@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              hrace102304@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Sta. Clara, General Trias, Cavite</span>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <a 
            href="https://www.facebook.com/share/1EezWoCMc3/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            <Facebook size={18} />
            <span>Facebook</span>
          </a>
          <a 
            href="https://www.instagram.com/engr.graciee?igsh=NGdjb3AwcnM2MWI0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.tiktok.com/@engr.graciee?_r=1&_t=ZS-91p7Hpo6yiV" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            <Music size={18} />
            <span>TikTok</span>
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link 
            href="/about"
            className="p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">About Me</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn about my background and skills</p>
          </Link>
          <Link 
            href="/education"
            className="p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Education</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">My academic journey and achievements</p>
          </Link>
          <Link 
            href="/experience"
            className="p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Experience</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Professional work experience</p>
          </Link>
          <Link 
            href="/leadership"
            className="p-6 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-950/30 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Leadership</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Organizational roles and responsibilities</p>
          </Link>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>© 2025 Grace B. Paredes. All rights reserved.</p>
      </footer>
    </div>
  );
}

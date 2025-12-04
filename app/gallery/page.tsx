import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    { src: '/1.jpeg', alt: 'Grace B. Paredes - Photo 1' },
    { src: '/2.jpeg', alt: 'Grace B. Paredes - Photo 2' },
    { src: '/3.jpeg', alt: 'Grace B. Paredes - Photo 3' },
    { src: '/4.jpeg', alt: 'Grace B. Paredes - Photo 4' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
        Gallery
      </h1>
      
      <p className="text-md text-zinc-700 dark:text-zinc-300 mb-4">
        Take a look at some moments captured in my journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

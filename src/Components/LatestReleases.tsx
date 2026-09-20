import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// ─── Data for the cards ──────────────────────────────────────────────
// Replace `image` with your actual image URLs or imported assets.
interface ReleaseItem {
  id: number;
  image: string;
  title: string;
  date: string;
}

const releases: ReleaseItem[] = [
  {
    id: 1,
    // Placeholder gradient for demonstration. Replace with real image URL.
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    title: 'Why InterLink is targeting the NYSE - Not just Crypto hype',
    date: 'Sep 2, 2025',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    title: 'Why Did Google Bet on the InterLink Future of Human Network. Is It Really a...',
    date: 'Sep 2, 2025',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
    title: 'Top 113 Human-AI models worldwide by NIST - U.S. National Institute of Standard...',
    date: 'Sep 2, 2025',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    title: 'InterLink Network: The Future of Decentralized Connectivity',
    date: 'Apr 26, 2025',
  },
];

// ─── Component ────────────────────────────────────────────────────────
export default function LatestReleases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll left or right by the width of one card (approx. 320px)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Latest releases.
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        {/* Horizontal Scroll Container – scrollbar hidden on all browsers */}
<div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
  style={{
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch',
  }}
>
  {releases.map((item) => (
    <article
      key={item.id}
      className="shrink-0 w-75 sm:w-[320px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden rounded-t-2xl bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          {item.date}
        </p>
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}
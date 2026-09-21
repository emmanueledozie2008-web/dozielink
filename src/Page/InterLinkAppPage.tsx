import { useEffect, useState, useRef } from "react";
import type { UIEvent } from "react";
import { Home, Store, Settings, User, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================
GET GREETING FROM VISITOR'S LOCAL TIME
========================================= */
const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning!";
  if (hour >= 12 && hour < 17) return "Good Afternoon!";
  if (hour >= 17 && hour < 21) return "Good Evening!";
  return "Good Night!";
};

/* =========================================
ADVERTISEMENT DATA
========================================= */
type Ad = { id: string; type: "nyse" | "mastercard" | "google" };

const ads: Ad[] = [
  { id: "nyse", type: "nyse" },
  { id: "mastercard", type: "mastercard" },
  { id: "google", type: "google" },
];

const InterLinkAppPage = () => {
  const [greeting, setGreeting] = useState<string>(getGreeting());
  const [activeAd, setActiveAd] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  /* =========================================
  UPDATE GREETING EVERY MINUTE
  ========================================== */
  useEffect(() => {
    const updateGreeting = () => setGreeting(getGreeting());
    const interval = window.setInterval(updateGreeting, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  /* =========================================
  SCROLL TO A SPECIFIC AD (measured)
  ========================================== */
  const scrollToAd = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  /* =========================================
  AUTO SLIDE ADS (pauses on user interaction)
  ========================================== */
  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveAd((current) => {
        const nextIndex = (current + 1) % ads.length;
        scrollToAd(nextIndex);
        return nextIndex;
      });
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  /* =========================================
  HANDLE SCROLL (snap detection via center distance)
  ========================================== */
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const center = container.scrollLeft + container.clientWidth / 2;

    let closest = 0;
    let minDist = Infinity;

    const children = Array.from(container.children) as HTMLElement[];
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    if (closest !== activeAd) setActiveAd(closest);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcfd] text-[#11111c] font-sans">
      {/* =====================================
      TOP HEADER
      ====================================== */}
      <header className="px-4 pt-6 pb-2 sm:px-6">
        <div className="mx-auto flex max-w-md items-center justify-between gap-2">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6c5ce7] shadow-sm">
            <img
              src="https://p2p-interlink.com/images/lo.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex h-11 flex-1 max-w-50 rounded-full bg-[#f1f1f7] p-1">
            <button
              type="button"
              className="flex-1 rounded-full bg-white text-sm font-semibold text-black shadow-sm"
            >
              App
            </button>
            <Link
              to="/Wallet"
              className="flex flex-1 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-[#6c5ce7]/10 hover:text-[#6c5ce7] active:scale-95"
            >
              Wallet
            </Link>
          </div>

          <button
            type="button"
            aria-label="Profile"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1f1f7] text-gray-500 transition hover:bg-gray-200"
          >
            <User size={20} />
          </button>
        </div>
      </header>

      {/* =====================================
      MAIN CONTENT
      ====================================== */}
      <main className="mx-auto max-w-md px-4 pb-32 pt-6 sm:px-6">
        {/* GREETING */}
        <section className="mb-6">
          <h1
            aria-live="polite"
            className="text-[34px] font-bold tracking-tight text-[#11111c] leading-tight"
          >
            {greeting}
          </h1>
        </section>

        {/* =====================================
        SLIDING ADVERTISEMENTS CAROUSEL
        ====================================== */}
        <section
          className="mb-6 overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0"
          aria-label="Advertisements"
        >
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carousel"
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {ads.map((ad, index) => (
              <div
                key={ad.id}
                className={`shrink-0 w-[85vw] sm:w-[320px] h-32.5 rounded-3xl snap-center flex items-center justify-center p-4 transition-all duration-300 ${
                  activeAd === index
                    ? "opacity-100 scale-100"
                    : "opacity-60 scale-95"
                }`}
              >
                {/* NYSE AD */}
                {ad.type === "nyse" && (
                  <div className="flex items-center gap-3 bg-[#f4f4fa] w-full h-full rounded-3xl justify-center px-6">
                    <div className="flex items-center text-[22px] font-bold tracking-tight text-[#11111c] relative">
                      NYSE
                      <div className="absolute -top-1 -right-5 h-3 w-3 bg-[#4bc0e8]"></div>
                      <div className="absolute -top-1 -right-2 h-3 w-3 bg-[#4bc0e8]"></div>
                    </div>
                    <div className="w-px h-8 bg-gray-300 mx-3"></div>
                    <div className="flex flex-col items-center justify-center text-[#6c5ce7]">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mb-0.5"
                      >
                        <path
                          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-[14px] font-bold tracking-tight">
                        InterLink Labs
                      </span>
                    </div>
                  </div>
                )}

                {/* Mastercard AD */}
                {ad.type === "mastercard" && (
                  <div className="flex items-center gap-3 bg-[#f4f4fa] w-full h-full rounded-3xl justify-center px-6">
                    <div className="flex items-center gap-1">
                      <div className="h-8 w-8 rounded-full bg-[#EB001B]"></div>
                      <div className="h-8 w-8 rounded-full bg-[#F79E1B] -ml-4 mix-blend-multiply"></div>
                    </div>
                    <span className="text-[18px] font-bold text-[#11111c] tracking-tight ml-1">
                      mastercard
                    </span>
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    <div className="flex items-center gap-1 text-[#6c5ce7]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Google AD */}
                {ad.type === "google" && (
                  <div className="flex items-center gap-3 bg-[#f4f4fa] w-full h-full rounded-3xl justify-center px-6">
                    <div className="flex items-center text-[18px] font-semibold tracking-tight">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                      <span className="text-gray-800 ml-1">for Startups</span>
                    </div>
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    <div className="flex items-center gap-1 text-[#6c5ce7]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-[16px] font-bold tracking-tight">
                        InterLink Labs
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 mt-2">
            {ads.map((ad, index) => (
              <button
                key={ad.id}
                onClick={() => {
                  setActiveAd(index);
                  scrollToAd(index);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  activeAd === index ? "w-6 bg-[#6c5ce7]" : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* =====================================
        BALANCE CARDS
        ====================================== */}
        <section className="mb-6 grid grid-cols-2 gap-4">
          <div className="relative min-h-42.5 overflow-hidden rounded-3xl bg-[#f4f4fa] p-5">
            <div className="relative z-10">
              <h2 className="text-[24px] font-bold text-[#11111c] leading-none tracking-widest">
                ******
              </h2>
              <p className="mt-2 text-[13px] font-medium text-gray-500">
                $ITLG
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center justify-center">
              <div className="relative h-24 w-24">
                <div className="absolute top-2 right-4 h-12 w-12 rounded-full bg-[#b0b0c8] opacity-40 rotate-12"></div>
                <div className="absolute top-6 right-8 h-14 w-14 rounded-full bg-[#8a8aa8] opacity-60 -rotate-12"></div>
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-linear-to-br from-[#e0e0f0] to-[#a0a0c0] shadow-lg border border-white/50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-40">
                    <path
                      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                      fill="#11111c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-42.5 overflow-hidden rounded-3xl bg-[#f4f4fa] p-5">
            <div className="relative z-10">
              <h2 className="text-[24px] font-bold text-[#11111c] leading-none tracking-widest">
                ******
              </h2>
              <p className="mt-2 text-[13px] font-medium text-gray-500 leading-tight">
                $ITLG Recoverable
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 flex items-center justify-center">
              <div className="relative h-28 w-28">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-[6px] border-[#8a9cf0] rounded-full border-t-transparent border-r-transparent rotate-45 opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-[6px] border-[#8a9cf0] rounded-full border-b-transparent border-l-transparent -rotate-45 opacity-60"></div>
                <div className="absolute bottom-2 right-2 h-20 w-20 rounded-full bg-linear-to-br from-[#fce181] to-[#e6b800] shadow-xl border-[3px] border-[#fff8d6] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-70">
                    <path
                      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                      fill="#b38f00"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
        MINE $ITLG CARD
        ====================================== */}
        <section className="relative overflow-hidden rounded-3xl bg-[#f4f4fa] p-6 shadow-sm mb-6">
          <div className="relative z-10 flex flex-col h-full">
            <h2 className="max-w-45 text-[22px] font-bold leading-tight text-[#11111c]">
              Mine $ITLG to Secure the Human Network!
            </h2>
            <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-r from-[#fce181] to-[#e6b800] px-6 py-3 text-[15px] font-bold text-[#11111c] shadow-md transition hover:scale-105 active:scale-95">
              Mine $ITLG
              <ArrowUpRight size={18} />
            </button>
            <div className="absolute -bottom-8 -right-4 w-45 h-45">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-[#1a1a2e] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                <img src="https://i.pravatar.cc/150?img=1" alt="User" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-[20%] right-0 h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                <img src="https://i.pravatar.cc/150?img=5" alt="User" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-[10%] right-0 h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                <img src="https://i.pravatar.cc/150?img=9" alt="User" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                <img src="https://i.pravatar.cc/150?img=12" alt="User" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-[20%] left-0 h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                <img src="https://i.pravatar.cc/150?img=20" alt="User" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-[20%] left-0 h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                <img src="https://i.pravatar.cc/150?img=33" alt="User" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-[10%] right-[20%] h-6 w-6 rounded-full bg-[#fce181] flex items-center justify-center shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="#b38f00"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
        VERIFIED $ITLG CARD
        ====================================== */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#fdf0b0] via-[#fce181] to-[#e6b800] p-6 shadow-sm mb-6 min-h-35 flex items-center">
          <div className="absolute -right-8 -bottom-12 w-50 h-50 perspective-1000">
            <div className="relative w-full h-full transform-style-3d rotate-y-[-15deg] rotate-x-10">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#d4a000] to-[#a67c00] shadow-2xl"></div>
              <div className="absolute inset-1.5 rounded-full bg-linear-to-br from-[#fce181] to-[#e6b800] shadow-inner flex items-center justify-center border-4 border-[#fff8d6]">
                <div className="w-16 h-16 rounded-full bg-[#e6b800]/40 flex items-center justify-center transform rotate-12">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-90 text-[#b38f00]"
                  >
                    <path
                      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-white/30 blur-sm"></div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col h-full max-w-35">
            <h2 className="text-[22px] font-bold text-[#3d2e00] leading-tight mb-4">
              Verified $ITLG
            </h2>
            <div className="absolute top-0 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fce181] shadow-lg border-2 border-white">
              <Check size={20} className="text-[#b38f00]" strokeWidth={3} />
            </div>
          </div>
        </section>
      </main>

      {/* =====================================
      MOBILE BOTTOM NAVIGATION
      ====================================== */}
      <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-full border border-gray-100 bg-white/95 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="flex items-center justify-around">
          <Link
            to="/Wallet"
            aria-label="Global"
            className="flex h-12 w-12 items-center justify-center text-[22px] transition hover:bg-gray-100 rounded-full"
          >
            🌍
          </Link>
          <button
            type="button"
            aria-label="Home"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#11111c] text-white shadow-md"
          >
            <Home size={22} />
          </button>
          <Link
            to="/Wallet"
            aria-label="Store"
            className="flex h-12 w-12 items-center justify-center text-gray-700 transition hover:text-[#6c5ce7] rounded-full"
          >
            <Store size={23} />
          </Link>
          <Link
            to="/Wallet"
            aria-label="Settings"
            className="flex h-12 w-12 items-center justify-center text-gray-700 transition hover:text-[#6c5ce7] rounded-full"
          >
            <Settings size={23} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default InterLinkAppPage;
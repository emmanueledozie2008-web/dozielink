import { useEffect, useState } from "react";
import {
  Layers3,
  Zap,
  Globe2,
  Network,
} from "lucide-react";

type Tab = "ecosystem" | "ibte" | "global";

const tabs: { id: Tab; label: string }[] = [
  {
    id: "ecosystem",
    label: "Ecosystem",
  },
  {
    id: "ibte",
    label: "IBTE",
  },
  {
    id: "global",
    label: "Global Payment",
  },
];

const tabImages: Record<Tab, string> = {
  ecosystem:
    "https://interlinklabs.ai/_next/image?url=https%3A%2F%2Fpublic.interlinklabs.ai%2F1784264271810_institutional-credibility-card-1.png&w=1080&q=70",

  ibte:
    "https://interlinklabs.ai/_next/image?url=https%3A%2F%2Fpublic.interlinklabs.ai%2F1784264271126_GG_startup.png&w=1080&q=70",

  global:
    "https://interlinklabs.ai/_next/image?url=https%3A%2F%2Fpublic.interlinklabs.ai%2F1781686663520_Interlink_card.png&w=1080&q=70",
};

const InterlinkChain = () => {
  const [activeTab, setActiveTab] = useState<Tab>("global");

  /*
   * Automatically change the image on small screens
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    if (!mediaQuery.matches) {
      return;
    }

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex(
          (tab) => tab.id === current
        );

        const nextIndex =
          (currentIndex + 1) % tabs.length;

        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Manual tab selection
   */
  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24">

      <div
        className="
          mx-auto
          grid
          max-w-375
          grid-cols-1
          items-center
          gap-10
          px-5

          sm:px-8
          md:px-12

          lg:grid-cols-2
          lg:gap-16
          lg:px-16
        "
      >

        {/* =========================
            LEFT SIDE
        ========================== */}
        <div className="w-full">

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-gray-100
              bg-[#f8f7ff]
              shadow-sm

              sm:rounded-[34px]
              md:rounded-[40px]
            "
          >

            {/* =========================
                TABS
            ========================== */}
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                z-10
                flex
                items-center
                justify-center
                gap-1
                px-3
                py-4

                sm:gap-2
                sm:px-5
                sm:py-5
              "
            >

              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={`
                      shrink-0
                      rounded-full
                      px-3
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-300

                      sm:px-5
                      sm:py-3
                      sm:text-sm

                      md:text-base

                      ${
                        isActive
                          ? "bg-[#6254e7] text-white shadow-md"
                          : "text-gray-400 hover:bg-white/70 hover:text-gray-700"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}

            </div>

            {/* =========================
                IMAGE
            ========================== */}
            <div className="relative">

              <img
                key={activeTab}
                src={tabImages[activeTab]}
                alt={activeTab}
                className="
                  block
                  h-100
                  w-full
                  object-cover

                  sm:h-125

                  md:h-150

                  lg:h-170

                  animate-[fadeIn_0.6s_ease-in-out]
                "
              />

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div className="max-w-2xl">

          <h2
            className="
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-gray-950

              sm:text-5xl
              md:text-6xl
              lg:text-[62px]
            "
          >
            Building the
            <br />
            infrastructure
            <br />
            for the next billion
            <br />
            users.
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-gray-500

              sm:text-lg
              md:text-xl
            "
          >
            An EVM Layer 1 designed for real-world payments,
            tokenized assets, and scalable digital commerce,
            connecting blockchain technology with the global
            economy.
          </p>

          {/* Features */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-5

              sm:grid-cols-2
              sm:gap-6
            "
          >

            <div className="flex items-center gap-4">
              <Layers3
                size={27}
                className="shrink-0 text-[#6254e7]"
              />

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                EVM compatible
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Zap
                size={27}
                className="shrink-0 text-[#6254e7]"
              />

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Instant settlement
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe2
                size={27}
                className="shrink-0 text-[#6254e7]"
              />

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Plug into RWA
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Network
                size={27}
                className="shrink-0 text-[#6254e7]"
              />

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Quantum resistant
              </span>
            </div>

          </div>

          <button
            type="button"
            className="
              mt-9
              rounded-full
              bg-[#10141d]
              px-9
              py-4
              text-base
              font-semibold
              text-white
              shadow-lg
              transition
              hover:-translate-y-1
              hover:bg-black

              sm:text-lg
            "
          >
            Learn more
          </button>

        </div>

      </div>

    </section>
  );
};

export default InterlinkChain;
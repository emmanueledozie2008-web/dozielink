import { useState } from "react";
import {
  Banknote,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";

type WalletTab = {
  id: string;
  label: string;
  image: string;
};

const WalletSection = () => {
  const [activeTab, setActiveTab] = useState<string>("exchange");

  const tabs: WalletTab[] = [
    {
      id: "exchange",
      label: "Token exchange",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aH1n_cQpLm--j3lP8ecEtnqRXaXj1CmpMOYfHFxE8g&s=10",
    },
    {
      id: "card",
      label: "Card",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UMSwWl8KAMcYQTBPSt1nRdXYNkUj-YtHhTodvDiT3g&s=10",
    },
    {
      id: "topup",
      label: "Top up",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBQ6V3BzG5k7POJKvDXxbcswdMYkMHqtPPCL2JhPxGw&s=10",
    },
    {
      id: "gift",
      label: "Gift card",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQkaSMKjenEvJs13tGnTzIVL9UfTGkMn1Y5uroYRRNw&s=10",
    },
  ];

  const activeContent = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 md:py-28">

      <div className="mx-auto grid max-w-375 grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <div className="max-w-2xl">

          {/* Small label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f0efff] px-4 py-2 text-sm font-medium text-[#6254e7]">
            <span className="h-2 w-2 rounded-sm bg-[#6254e7]" />
            ITLX Wallet
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-gray-950

              sm:text-5xl

              md:text-6xl

              lg:text-[64px]
            "
          >
            Crypto made simple,
            <br />
            secure, and seamless.
          </h2>

          {/* Description */}
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
            A non-custodial wallet to store assets, manage
            payments, and interact with the InterLink ecosystem.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

            <div className="flex items-center gap-4">
              <div className="text-[#6254e7]">
                <Banknote size={26} />
              </div>

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Spend crypto like cash
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#6254e7]">
                <Zap size={26} />
              </div>

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Instant transfer
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#6254e7]">
                <TrendingUp size={26} />
              </div>

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Automated earnings
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#6254e7]">
                <ShieldCheck size={26} />
              </div>

              <span className="text-base font-medium text-[#6254e7] sm:text-lg">
                Unparalleled security
              </span>
            </div>

          </div>

          {/* Learn More */}
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

        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div className="w-full">

          {/* Tabs */}
          <div
            className="
              flex
              items-center
              gap-1
              overflow-x-auto
              rounded-t-3xl
              bg-[#e9e7ff]
              p-2

              sm:rounded-t-4xl
            "
          >

            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    shrink-0
                    rounded-full
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    sm:px-6
                    sm:text-base

                    ${
                      isActive
                        ? "bg-[#6254e7] text-white shadow-md"
                        : "text-gray-500 hover:bg-white/60 hover:text-gray-800"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}

          </div>

          {/* Image Area */}
          <div className="relative overflow-hidden rounded-b-3xl bg-[#e9e7ff] sm:rounded-b-[32px]">

            {activeContent && (
              <img
                key={activeContent.id}
                src={activeContent.image}
                alt={activeContent.label}
                className="
                  block
                  h-105
                  w-full
                  object-cover
                  transition-opacity
                  duration-500

                  sm:h-125

                  md:h-150

                  lg:h-162.5
                "
              />
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WalletSection;
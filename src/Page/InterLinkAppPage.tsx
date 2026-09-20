import { useEffect, useState } from "react";
import {
  Home,
  Store,
  Share2,
  User,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Gift,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

type Ad = {
  title: string;
  description: string;
  button: string;
  type: "instagram" | "community" | "wallet";
};

const ads: Ad[] = [
    {
        title: "Follow InterLink for updates",
        description:
          "Discover new features, ecosystem announcements and community updates.",
        button: "Follow now",
        type: "instagram",
       
      },
      {
        title: "Discover the InterLink ecosystem",
        description:
          "Explore apps, digital experiences and new ways to interact with the network.",
        button: "Explore now",
        type: "community",
        
      },
      {
        title: "Your wallet, your gateway",
        description:
          "Activate your InterLink Wallet and keep your network experience in one place.",
        button: "Activate wallet",
        type: "wallet",
        
      },
      
];

/* =========================================
   GET GREETING FROM VISITOR'S LOCAL TIME
========================================= */

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning!";
  }

  if (hour >= 12 && hour < 17) {
    return "Good Afternoon!";
  }

  if (hour >= 17 && hour < 21) {
    return "Good Evening!";
  }

  return "Good Night!";
};

const InterLinkAppPage = () => {
  const [activeAd, setActiveAd] = useState(0);

  const [greeting, setGreeting] = useState(getGreeting());

  /* =========================================
     UPDATE GREETING EVERY MINUTE
  ========================================== */

  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting());
    };

    const interval = window.setInterval(
      updateGreeting,
      60 * 1000
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* =========================================
     AUTOMATIC AD SLIDER
  ========================================== */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveAd((current) => (current + 1) % ads.length);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const nextAd = () => {
    setActiveAd((current) => (current + 1) % ads.length);
  };

  const previousAd = () => {
    setActiveAd(
      (current) => (current - 1 + ads.length) % ads.length
    );
  };

  const ad = ads[activeAd];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f8fc] text-[#11111c]">

      {/* =====================================
          TOP HEADER
      ====================================== */}

      <header className="sticky top-0 z-50 bg-[#f8f8fc]/95 px-4 py-3 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center gap-3 sm:gap-4">

          {/* LOGO */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#786cff] to-[#5148dc] shadow-sm">

            <img
              src="https://p2p-interlink.com/images/lo.png"
              alt="InterLink"
              className="h-full w-full object-cover"
            />

            {/* Fallback letter */}
            <span className="absolute text-xl font-bold text-white">
              I
            </span>
          </div>

          {/* APP / WALLET SWITCHER */}
          <div className="flex h-12 flex-1 rounded-full bg-[#eeedf7] p-1">

            <button
              type="button"
              className="
                flex-1
                rounded-full
                bg-white
                text-sm
                font-semibold
                text-black
                shadow-sm
                sm:text-base
              "
            >
              App
            </button>

            <Link
              to="/Validate"
              className="
                flex-1
                rounded-full
                text-sm
                font-medium
                text-gray-500
                transition
                hover:text-black
                sm:text-base
              "
            >
              Wallet
            </Link>

          </div>

          {/* PROFILE */}
          <button
            type="button"
            aria-label="Profile"
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#eeedf7]
              text-gray-500
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <User size={23} />
          </button>

        </div>
      </header>

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <main className="mx-auto max-w-7xl px-4 pb-32 pt-10 sm:px-6 sm:pt-14">

        {/* =====================================
            GREETING
        ====================================== */}

        <section className="mb-8">

          <p className="text-sm font-medium text-gray-500">
            Welcome back
          </p>

          <h1 className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
            {greeting}
          </h1>

        </section>

        {/* =====================================
            ROTATING ADVERTISEMENT
        ====================================== */}

        <section className="relative overflow-hidden rounded-[28px] bg-white shadow-sm">

          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-white via-[#f7f7ff] to-[#eceaff]" />

          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#675df0]/10 blur-3xl" />

          <div className="absolute -bottom-25 right-10 h-52 w-52 rounded-full bg-[#8d85ff]/10 blur-3xl" />

          {/* Content */}
          <div
            key={activeAd}
            className="
              relative
              flex
              min-h-65
              flex-col
              justify-between
              p-6
              animate-[fadeIn_0.5s_ease]
              sm:min-h-70
              sm:p-8
            "
          >

            {/* TOP */}
            <div className="flex items-center justify-between">

              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                InterLink Update
              </span>

              {/* ARROWS */}
              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={previousAd}
                  aria-label="Previous advertisement"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-gray-500
                    shadow-sm
                    transition
                    hover:bg-[#11111c]
                    hover:text-white
                  "
                >
                  <ChevronLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={nextAd}
                  aria-label="Next advertisement"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-gray-500
                    shadow-sm
                    transition
                    hover:bg-[#11111c]
                    hover:text-white
                  "
                >
                  <ChevronRight size={17} />
                </button>

              </div>
            </div>

            {/* AD CONTENT */}
            <div className="max-w-162.5">

              {/* ICON */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#635bdf] text-white">

                {ad.type === "instagram" && (
                  <Sparkles size={23} />
                )}

                {ad.type === "community" && (
                  <Globe2 size={23} />
                )}

                {ad.type === "wallet" && (
                  <Wallet size={23} />
                )}

              </div>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {ad.title}
              </h2>

              <p className="mt-2 max-w-137.5 text-sm leading-6 text-gray-500 sm:text-base">
                {ad.description}
              </p>

              <Link
                to="/Validate"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#11111c]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#635bdf]
                "
              >
                {ad.button}

                <ArrowRight size={16} />
              </Link>

            </div>

            {/* SLIDER DOTS */}
            <div className="absolute bottom-5 right-6 flex gap-1.5">

              {ads.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveAd(index)}
                  aria-label={`Advertisement ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeAd
                      ? "w-6 bg-[#625bea]"
                      : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}

            </div>

          </div>
        </section>

        {/* =====================================
            WALLET BALANCE CARDS
        ====================================== */}

        <section className="mt-7 grid grid-cols-2 gap-4">

          {/* BALANCE */}
          <div className="relative min-h-47.5 overflow-hidden rounded-[26px] bg-linear-to-br from-[#f7f7ff] to-[#eeecff] p-5 sm:min-h-55 sm:p-7">

            <p className="text-sm text-gray-500">
              Wallet balance
            </p>

            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              20
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              $ITLG
            </p>

            {/* COIN DECORATION */}
            <div className="absolute -bottom-8 -right-8 flex h-32 w-32 rotate-12 items-center justify-center rounded-full bg-[#5e58df]/10">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-[#252450] to-[#7470e8] shadow-lg">

                <span className="text-2xl font-bold text-white">
                  I
                </span>

              </div>

            </div>

          </div>

          {/* RECOVERABLE */}
          <div className="relative min-h-57.5 overflow-hidden rounded-[26px] bg-linear-to-br from-[#f7f7ff] to-[#eef3ff] p-5 sm:min-h-55 sm:p-7">

            <p className="text-sm text-gray-500">
              Recoverable
            </p>

            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              0
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              $ITLG Recoverable
            </p>

            {/* COIN DECORATION */}
            <div className="absolute -bottom-10 -right-5 flex h-32 w-32 items-center justify-center rounded-full bg-[#ffd84d]/30">

              <div className="h-20 w-20 rounded-full bg-linear-to-br from-[#f7d85c] to-[#d9a900] shadow-lg" />

            </div>

          </div>

        </section>

        {/* =====================================
            ACTIVATE WALLET
        ====================================== */}

        <section className="mt-7 overflow-hidden rounded-[28px] bg-[#11111c] text-white">

          <div className="relative p-7 sm:p-10">

            {/* GLOW */}
            <div className="absolute -right-12.5 -top-15 h-48 w-48 rounded-full bg-[#635bdf]/30 blur-3xl" />

            <div className="absolute -bottom-20 left-[35%] h-40 w-40 rounded-full bg-[#635bdf]/10 blur-3xl" />

            <div className="relative">

              {/* ICON */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#635bdf]">
                <Wallet size={24} />
              </div>

              {/* TITLE */}
              <h2 className="mt-6 max-w-162.5 text-3xl font-semibold leading-tight sm:text-4xl">
                Activate your InterLink Wallet.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-162.5 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                Your wallet is your personal gateway into the InterLink
                ecosystem. Use it to manage supported digital assets,
                explore applications and access wallet-based features.
              </p>

              {/* BUTTON */}
              <Link
                to="/Validate"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#dcd9ff]
                "
              >
                <span>Activate wallet</span>

                <ArrowRight size={17} />
              </Link>

            </div>
          </div>
        </section>

        {/* =====================================
            WHY ACTIVATE
        ====================================== */}

        <section className="mt-10">

          <div className="mb-6">

            <p className="text-sm font-medium tracking-wider text-[#635bdf]">
              WHY ACTIVATE?
            </p>

            <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              One wallet. More possibilities.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Explore supported wallet features and interact with the
              InterLink ecosystem from one simple interface.
            </p>

          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {/* SECURITY */}
            <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#efedff] text-[#625bea]">
                <ShieldCheck size={21} />
              </div>

              <h3 className="mt-5 font-semibold">
                Self-custody
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Keep control of your wallet credentials and supported assets.
              </p>

            </div>

            {/* SPEED */}
            <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#efedff] text-[#625bea]">
                <Zap size={21} />
              </div>

              <h3 className="mt-5 font-semibold">
                Fast access
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Access supported wallet features from one simple interface.
              </p>

            </div>

            {/* ECOSYSTEM */}
            <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#efedff] text-[#625bea]">
                <Globe2 size={21} />
              </div>

              <h3 className="mt-5 font-semibold">
                Ecosystem
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Explore applications and services connected to InterLink.
              </p>

            </div>

            {/* FEATURES */}
            <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#efedff] text-[#625bea]">
                <Gift size={21} />
              </div>

              <h3 className="mt-5 font-semibold">
                Wallet features
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Discover supported features as the ecosystem develops.
              </p>

            </div>

          </div>
        </section>

        {/* =====================================
            EDUCATIONAL CARD
        ====================================== */}

        <section className="relative mt-7 overflow-hidden rounded-[28px] bg-linear-to-br from-[#e9e7ff] to-[#f7f7ff] p-7 sm:p-10">

          <div className="relative z-10 max-w-162.5">

            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#635bdf] shadow-sm">
              INTERLINK EDUCATION
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              Understand your wallet before you use it.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              Learn how wallet activation, security, digital assets and
              ecosystem applications work before getting started.
            </p>

            <Link
              to="/Validate"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#635bdf]
              "
            >
              Learn more

              <ArrowRight size={16} />
            </Link>

          </div>

          {/* DECORATIONS */}
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#625bea]/10" />

          <div className="absolute -bottom-17.5 right-10 h-40 w-40 rounded-full bg-[#625bea]/10" />

        </section>

      </main>

      {/* =====================================
          MOBILE BOTTOM NAVIGATION
      ====================================== */}

      <nav
        className="
          fixed
          bottom-4
          left-1/2
          z-50
          w-[calc(100%-32px)]
          max-w-md
          -translate-x-1/2
          rounded-full
          border
          border-gray-100
          bg-white/95
          p-2
          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
          backdrop-blur-xl
        "
      >

        <div className="flex items-center justify-around">

          {/* GLOBAL */}
          <Link
            to="/Validate"
            aria-label="Global"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              text-xl
              transition
              hover:bg-gray-100
            "
          >
            🌍
          </Link>

          {/* HOME */}
          <button
            type="button"
            aria-label="Home"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#11111c]
              text-white
              shadow-lg
            "
          >
            <Home size={22} />
          </button>

          {/* STORE */}
          <Link
            to="/Validate"
            aria-label="Marketplace"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              text-gray-700
              transition
              hover:text-[#625bea]
            "
          >
            <Store size={23} />
          </Link>

          {/* SHARE */}
          <Link
            to="/Validate"
            aria-label="Share"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              text-gray-700
              transition
              hover:text-[#625bea]
            "
          >
            <Share2 size={23} />
          </Link>

        </div>
      </nav>

      {/* =====================================
          ANIMATION
      ====================================== */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
};

export default InterLinkAppPage;
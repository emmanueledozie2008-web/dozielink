import { useEffect, useState } from "react";
import { Home, Store, Users, UserRound, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   LOCAL TIME GREETING
========================================================= */

const getGreeting = (): string => {
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

/* =========================================================
   INTERLINK APP PAGE
========================================================= */

const InterLinkAppPage = () => {
  const [greeting, setGreeting] = useState(getGreeting());

  /* Update greeting automatically */
  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting());
    };

    const interval = window.setInterval(updateGreeting, 60 * 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* =========================================================
     SCROLL TO TOP
  ========================================================= */

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#11111c]">

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <header className="sticky top-0 z-40 border-b border-gray-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[92px] max-w-md items-center justify-between px-5">

          {/* INTERLINK LOGO */}

          <Link
            to="/"
            aria-label="InterLink Home"
            className="flex shrink-0 items-center"
          >
            <img
              src="https://p2p-interlink.com/images/lo.png"
              alt="InterLink"
              className="h-[52px] w-[52px] object-contain"
            />
          </Link>

          {/* APP / WALLET SWITCH */}

          <div className="mx-3 flex h-[54px] flex-1 rounded-full bg-[#f1f1f7] p-1 shadow-inner">

            <button
              type="button"
              className="
                flex-1
                rounded-full
                bg-white
                px-3
                text-[17px]
                font-semibold
                text-[#11111c]
                shadow-[0_2px_10px_rgba(0,0,0,0.06)]
              "
            >
              App
            </button>

            <Link
              to="/Wallet"
              className="
                flex
                flex-1
                items-center
                justify-center
                rounded-full
                px-3
                text-[17px]
                font-semibold
                text-[#676778]
                transition
                hover:text-[#6757e8]
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
              h-[54px]
              w-[54px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-[#f5f5f8]
              text-[#b5b5c2]
            "
          >
            <UserRound
              size={31}
              strokeWidth={1.5}
            />
          </button>

        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto w-full max-w-md px-5 pb-32 pt-7">

        {/* ===================================================
            GREETING
        =================================================== */}

        <section className="mb-7">

          <h1
            aria-live="polite"
            className="
              text-[34px]
              font-bold
              leading-tight
              tracking-[-1.5px]
              text-[#11111c]
            "
          >
            {greeting}
          </h1>

        </section>

        {/* ===================================================
            BALANCE CARDS
        =================================================== */}

        <section className="grid grid-cols-2 gap-4">

          {/* =================================================
              ITLG BALANCE
          ================================================= */}

          <div
            className="
              relative
              h-[190px]
              overflow-hidden
              rounded-[28px]
              bg-[#f5f5f9]
            "
          >

            {/* Balance */}

            <div className="relative z-20 p-5">

              <h2 className="text-[23px] font-bold tracking-[4px]">
                ******
              </h2>

              <p className="mt-2 text-[17px] font-medium text-[#9292a0]">
                $ITLG
              </p>

            </div>

            {/* ROTATING COINS */}

            <div
              className="
                absolute
                -bottom-7
                -right-8
                h-[145px]
                w-[190px]
              "
            >

              <video
                className="
                  h-full
                  w-full
                  object-contain
                "
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/itlg-coin.webm"
                  type="video/webm"
                />

                <source
                  src="/itlg-coin.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

          {/* =================================================
              RECOVERABLE
          ================================================= */}

          <div
            className="
              relative
              h-[190px]
              overflow-hidden
              rounded-[28px]
              bg-[#f3f5fb]
            "
          >

            <div className="relative z-20 p-5">

              <h2 className="text-[23px] font-bold tracking-[4px]">
                ******
              </h2>

              <p
                className="
                  mt-2
                  max-w-[120px]
                  text-[16px]
                  font-medium
                  leading-5
                  text-[#9292a0]
                "
              >
                $ITLG Recoverable
              </p>

            </div>

            {/* GOLD COIN */}

            <div
              className="
                absolute
                -bottom-8
                -right-7
                h-[145px]
                w-[145px]
              "
            >

              <div
                className="
                  absolute
                  inset-1
                  rounded-full
                  border-[7px]
                  border-[#6c83e8]
                  border-b-transparent
                  border-l-transparent
                  rotate-[35deg]
                  opacity-90
                "
              />

              <div
                className="
                  absolute
                  inset-5
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-[#fff3a5]
                  bg-gradient-to-br
                  from-[#fff09a]
                  via-[#f0c932]
                  to-[#d99d00]
                  shadow-[0_8px_20px_rgba(180,140,0,0.25)]
                "
              >

                <div className="text-[42px] font-bold text-[#c49b18]">
                  I
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            MINE ITLG
        =================================================== */}

        <section
          className="
            relative
            mt-5
            h-[190px]
            overflow-hidden
            rounded-[30px]
            bg-[#f5f5f9]
          "
        >

          {/* TEXT */}

          <div className="relative z-20 p-6">

            <h2
              className="
                max-w-[225px]
                text-[27px]
                font-bold
                leading-[1.08]
                tracking-[-1px]
              "
            >
              Mine $ITLG to
              <br />
              Secure the Human
              <br />
              Network!
            </h2>

            {/* MINE BUTTON */}

            <button
              type="button"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#ffe98b]
                via-[#f8dc65]
                to-[#e4b72c]
                px-7
                py-3.5
                text-[17px]
                font-semibold
                text-[#11111c]
                shadow-[0_8px_18px_rgba(220,180,40,0.2)]
                transition
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(220,180,40,0.3)]
                active:scale-95
              "
            >
              Mine $ITLG

              <ArrowUpRight
                size={21}
                strokeWidth={2.5}
              />
            </button>

          </div>

          {/* =================================================
              WORLD / HUMAN NETWORK GRAPHIC
          ================================================= */}

          <div
            className="
              absolute
              bottom-4.5
              right-[-5px]
              h-[180px]
              w-[205px]
            "
          >

            {/* WORLD */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-26.25
                w-26.25
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-full
                bg-[#10162a]
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                alt="Global network"
                className="h-full w-full object-cover opacity-90"
              />

              <div className="absolute inset-0 rounded-full bg-blue-900/20" />

            </div>

            {/* USER 1 */}

            <div
              className="
                absolute
                left-[43%]
                top-0
                h-10
                w-10
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-gray-200
                shadow
              "
            >
              <img
                src="https://i.pravatar.cc/100?img=47"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* USER 2 */}

            <div
              className="
                absolute
                right-0
                top-[25%]
                h-10
                w-10
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-gray-200
                shadow
              "
            >
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* USER 3 */}

            <div
              className="
                absolute
                bottom-[15%]
                right-0
                h-10
                w-10
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-gray-200
                shadow
              "
            >
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* USER 4 */}

            <div
              className="
                absolute
                bottom-0
                left-[43%]
                h-10
                w-10
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-gray-200
                shadow
              "
            >
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* USER 5 */}

            <div
              className="
                absolute
                bottom-[20%]
                left-0
                h-10
                w-10
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-gray-200
                shadow
              "
            >
              <img
                src="https://i.pravatar.cc/100?img=25"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* USER 6 */}

            <div
              className="
                absolute
                left-0
                top-[25%]
                h-9
                w-9
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-gray-200
                shadow
              "
            >
              <img
                src="https://i.pravatar.cc/100?img=20"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* SMALL ITLG COIN */}

            <div
              className="
                absolute
                right-[20%]
                top-[13%]
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#f4d454]
                text-xs
                font-bold
                text-white
                shadow
              "
            >
              I
            </div>

          </div>

        </section>

        {/* ===================================================
            VERIFIED ITLG
        =================================================== */}

        <section
          className="
            relative
            mt-5
            h-51.25
            overflow-hidden
            rounded-[30px]
            bg-linear-to-br
            from-[#fff4a9]
            via-[#ffe77b]
            to-[#e8c33c]
          "
        >

          {/* LIGHT EFFECT */}

          <div
            className="
              absolute
              left-15
              top-12.5
              h-25
              w-62.5
              rotate-12
              rounded-full
              bg-white/80
              blur-2xl
            "
          />

          {/* TITLE */}

          <h2
            className="
              relative
              z-20
              p-6
              text-[27px]
              font-bold
              tracking-[-1px]
              text-[#65657a]
            "
          >
            Verified $ITLG
          </h2>

          {/* LARGE GOLD COIN */}

          <div
            className="
              absolute
              -bottom-20
              right-8.75
              h-6.25
              w-61.25
            "
          >

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-linear-to-br
                from-[#fff6a5]
                via-[#f2cf43]
                to-[#c99b13]
                shadow-[0_15px_35px_rgba(170,130,0,0.3)]
              "
            />

            {/* COIN INNER */}

            <div
              className="
                absolute
                inset-[12px]
                flex
                items-center
                justify-center
                rounded-full
                border-[5px]
                border-[#fff2a0]
                bg-gradient-to-br
                from-[#f9e77d]
                via-[#e3b92e]
                to-[#c99812]
              "
            >

              {/* INTERLINK MARK */}

              <div
                className="
                  flex
                  h-[115px]
                  w-[115px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e1b82d]/40
                  text-[85px]
                  font-black
                  text-[#bd9415]
                  shadow-inner
                "
              >
                I
              </div>

            </div>

          </div>

          {/* VERIFIED BADGE */}

          <div
            className="
              absolute
              right-7
              top-7
              z-30
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#f6df69]
              shadow-lg
              ring-2
              ring-white/70
            "
          >

            <Check
              size={27}
              strokeWidth={3}
              className="text-white"
            />

          </div>

          {/* SMALL COIN */}

          <div
            className="
              absolute
              bottom-5
              right-[-3px]
              z-30
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border-2
              border-[#ffe98a]
              bg-[#e2bd32]
              text-sm
              font-bold
              text-[#fff4af]
            "
          >
            I
          </div>

        </section>

      </main>

      {/* =====================================================
          BOTTOM NAVIGATION
      ===================================================== */}

      <nav
        className="
          fixed
          bottom-5
          left-1/2
          z-50
          w-[calc(100%-42px)]
          max-w-md
          -translate-x-1/2
          rounded-full
          border
          border-gray-100
          bg-white/95
          px-3
          py-2
          shadow-[0_12px_40px_rgba(0,0,0,0.09)]
          backdrop-blur-xl
        "
      >

        <div className="flex items-center justify-around">

          {/* WORLD */}

          <Link
            to="/Wallet"
            aria-label="World"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              text-[31px]
              transition
              hover:scale-105
            "
          >
            🌍
          </Link>

          {/* HOME */}

          <button
            type="button"
            onClick={goToTop}
            aria-label="Home"
            className="
              flex
              h-[62px]
              w-[62px]
              items-center
              justify-center
              rounded-full
              bg-[#171925]
              text-white
              shadow-[0_8px_20px_rgba(23,25,37,0.25)]
              transition
              hover:scale-105
              active:scale-95
            "
          >
            <Home
              size={27}
              fill="white"
              strokeWidth={1.5}
            />
          </button>

          {/* STORE */}

          <Link
            to="/Wallet"
            aria-label="Store"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              text-[#11111c]
              transition
              hover:scale-105
            "
          >
            <Store
              size={28}
              strokeWidth={1.8}
            />
          </Link>

          {/* COMMUNITY */}

          <Link
            to="/Wallet"
            aria-label="Community"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              text-[#11111c]
              transition
              hover:scale-105
            "
          >
            <Users
              size={29}
              strokeWidth={1.8}
            />
          </Link>

        </div>

      </nav>

    </div>
  );
};

export default InterLinkAppPage;
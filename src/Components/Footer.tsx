import {
    FaXTwitter,
    FaDiscord,
    // FaTelegramPlane,
    FaMedium,
    FaGithub,
    FaFacebookF,
  } from "react-icons/fa6";
  import { FaArrowUp } from "react-icons/fa";
  
  const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <footer className="w-full overflow-hidden">
  
        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
  
            {/* =========================
                BRAND
            ========================== */}
            <div className="lg:col-span-1">
  
              {/* LOGO */}
              <a
                href="/"
                className="inline-flex items-center"
              >
                <img
                  src="https://p2p-interlink.com/images/lo.png"
                  alt="InterLink"
                  className="h-14 w-14 rounded-2xl object-contain"
                />
              </a>
  
              {/* TAGLINE */}
              <p className="mt-4 max-w-[250px] text-base text-gray-500">
                Human Network in the Age of AI
              </p>
  
              {/* SOCIAL ICONS */}
              <div className="mt-7 flex flex-wrap gap-3">
  
                <a
                  href="#"
                  aria-label="X"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f9] text-gray-700 transition hover:bg-black hover:text-white"
                >
                  <FaXTwitter size={19} />
                </a>
  
                <a
                  href="#"
                  aria-label="Discord"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f9] text-gray-700 transition hover:bg-black hover:text-white"
                >
                  <FaDiscord size={20} />
                </a>
  
                <a
                  href="#"
                  aria-label="Telegram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f9] text-gray-700 transition hover:bg-black hover:text-white"
                >
                  {/* <FaTelegramPlane size={19} /> */}
                </a>
  
                <a
                  href="#"
                  aria-label="Medium"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f9] text-gray-700 transition hover:bg-black hover:text-white"
                >
                  <FaMedium size={20} />
                </a>
  
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f9] text-gray-700 transition hover:bg-black hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
  
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f6f9] text-gray-700 transition hover:bg-black hover:text-white"
                >
                  <FaFacebookF size={18} />
                </a>
  
              </div>
            </div>
  
            {/* =========================
                ABOUT US
            ========================== */}
            <div>
              <h3 className="text-base font-semibold text-black">
                About us
              </h3>
  
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    InterLink Foundation
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    Whitepaper
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    Ambassador
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
  
            {/* =========================
                RESOURCE
            ========================== */}
            <div>
              <h3 className="text-base font-semibold text-black">
                Resource
              </h3>
  
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    Privacy Policy
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    Terms and Conditions
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition hover:text-black"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
  
            {/* =========================
                ADDRESS
            ========================== */}
            <div>
              <h3 className="text-base font-semibold text-black">
                Address
              </h3>
  
              <p className="mt-6 max-w-[280px] text-base leading-7 text-gray-500">
                895 Dove Street, Suite 300,
                <br />
                Newport Beach, CA 92660, USA
              </p>
            </div>
  
          </div>
        </div>
  
        {/* =========================
            COPYRIGHT BAR
        ========================== */}
        <div className="relative overflow-hidden bg-[#625bea]">
  
          {/* BACKGROUND DOT/PATTERN */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div
              className="
                absolute
                bottom-[-100px]
                left-[20%]
                h-[220px]
                w-[600px]
                bg-[radial-gradient(circle,_white_1.5px,_transparent_1.5px)]
                [background-size:10px_10px]
              "
            />
          </div>
  
          <div className="relative mx-auto flex min-h-[125px] max-w-[1400px] items-center justify-between gap-6 px-6 py-8 sm:px-10 lg:px-16">
  
            {/* COPYRIGHT */}
            <p className="text-sm text-white/90 sm:text-base">
              © 2025 Copyright InterLink. All rights reserved.
            </p>
  
            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                shadow-lg
                backdrop-blur-sm
                transition
                duration-300
                hover:bg-white
                hover:text-[#625bea]
              "
            >
              <FaArrowUp size={17} />
            </button>
  
          </div>
        </div>
  
      </footer>
    );
  };
  
  export default Footer;
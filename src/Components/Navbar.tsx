import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 md:px-8">
      <nav className="mx-auto flex max-w-375 items-center justify-between rounded-2xl border border-black/10 bg-white/85 px-3 py-2.5 shadow-lg backdrop-blur-md sm:px-5 sm:py-3 md:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex min-w-0 items-center gap-1.5 sm:gap-2"
        >
          <img
            src="https://p2p-interlink.com/images/lo.png"
            alt="InterLink"
            className="h-8 w-auto shrink-0 object-contain sm:h-10 md:h-12"
          />

          <span className="truncate text-base font-semibold tracking-tight text-[#5149c9] sm:text-xl md:text-2xl">
            InterLink
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          <a
            href="/"
            className="text-[16px] font-medium text-[#5d54d7] transition hover:text-[#4b42c7]"
          >
            Home
          </a>

          <button
            type="button"
            className="flex items-center gap-1 text-[16px] font-medium text-gray-700 transition hover:text-[#5d54d7]"
          >
            Ecosystem
            <ChevronDown size={16} />
          </button>

          <a
            href="#blog"
            className="text-[16px] font-medium text-gray-700 transition hover:text-[#5d54d7]"
          >
            Blog
          </a>

          <button
            type="button"
            className="flex items-center gap-1 text-[16px] font-medium text-gray-700 transition hover:text-[#5d54d7]"
          >
            Community
            <ChevronDown size={16} />
          </button>

          <button
            type="button"
            className="flex items-center gap-1 text-[16px] font-medium text-gray-700 transition hover:text-[#5d54d7]"
          >
            Resource
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Desktop Get App */}
        <button
          type="button"
          className="hidden rounded-full bg-[#6254e7] px-8 py-3 text-[16px] font-semibold text-white shadow-lg shadow-purple-300/40 transition duration-300 hover:scale-105 hover:bg-[#5144d5] lg:block"
        >
          Get the app
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenu((prev) => !prev)}
          className="ml-2 shrink-0 rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenu ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="mx-3 mt-2 rounded-2xl border border-black/10 bg-white p-5 shadow-xl backdrop-blur-md sm:mx-4 sm:p-6 lg:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="/"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-[#5d54d7]"
            >
              Home
            </a>

            <button
              type="button"
              className="flex items-center justify-between text-left font-medium text-gray-700"
            >
              Ecosystem
              <ChevronDown size={16} />
            </button>

            <a
              href="#blog"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-gray-700"
            >
              Blog
            </a>

            <button
              type="button"
              className="flex items-center justify-between text-left font-medium text-gray-700"
            >
              Community
              <ChevronDown size={16} />
            </button>

            <button
              type="button"
              className="flex items-center justify-between text-left font-medium text-gray-700"
            >
              Resource
              <ChevronDown size={16} />
            </button>

            <button
              type="button"
              className="mt-2 w-full rounded-full bg-[#6254e7] py-3 font-semibold text-white shadow-lg shadow-purple-300/30"
            >
              Get the app
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

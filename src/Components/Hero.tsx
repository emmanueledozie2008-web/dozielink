import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-svh overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://public.interlinklabs.ai/1784520645607_interlink-hero-video.webm"
          type="video/webm"
        />

        Your browser does not support the video tag.
      </video>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-white/70 via-white/30 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-375 items-center px-6 pt-32 md:px-12 lg:px-20">

        <div className="max-w-3xl">

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#5a50dc] sm:text-5xl md:text-6xl lg:text-[68px]">
            Activate the Marketplace
            <br />
            on Your InterLink Wallet
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
            Securely trade your ITG assets with others using
            InterLink Escrow Services.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">

            {/* ACTIVATE MARKETPLACE */}
            <Link
              to="/InterLinkAppPage"
              className="
                group
                inline-flex
                w-fit
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#625bea]
                px-7
                py-4
                text-base
                font-semibold
                text-white
                shadow-[0_12px_35px_rgba(98,91,234,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#5149dc]
                hover:shadow-[0_16px_40px_rgba(98,91,234,0.45)]
                active:scale-95
                sm:px-8
                sm:py-4
                sm:text-lg
              "
            >
              <Sparkles
                size={19}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              <span>Activate Marketplace</span>

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* DOWNLOAD */}
            <button
              type="button"
              className="
                w-fit
                rounded-full
                border
                border-black/10
                bg-white/80
                px-7
                py-4
                text-base
                font-semibold
                text-[#10141d]
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                sm:px-8
                sm:py-4
                sm:text-lg
              "
            >
              Download
            </button>

          </div>

          {/* SMALL CTA MESSAGE */}
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-600">
            <span className="h-2 w-2 rounded-full bg-[#625bea]" />
            Explore the InterLink marketplace
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
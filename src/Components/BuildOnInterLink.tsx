const BuildOnInterLink = () => {
    return (
      <section className="relative w-full overflow-hidden bg-[#5b55ed]">
  
        {/* BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          {/* Replace this with your actual section video */}
          <source
            src="https://public.interlinklabs.ai/1781576697634_ascii_basedash_footer_logo_remix_scene.mp4"
            type="video/webm"
          />
  
          Your browser does not support the video tag.
        </video>
  
        {/* DARK/PURPLE OVERLAY */}
        <div className="absolute inset-0 bg-[#5b55ed]/40" />
  
        {/* CONTENT */}
        <div className="relative z-10 min-h-130 w-full">
  
          <div className="mx-auto flex min-h-130 max-w-[1600px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
  
            {/* TEXT */}
            <div className="max-w-175">
  
              <h2
                className="
                  text-4xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-[78px]
                "
              >
                Start building on InterLink
              </h2>
  
              <p
                className="
                  mt-5
                  max-w-162.5
                  text-base
                  leading-7
                  text-white/70
                  sm:text-lg
                  sm:leading-8
                  lg:text-xl
                "
              >
                Build on the open economy. Fast, liquid and always on.
              </p>
  
              {/* WHITEPAPER BUTTON */}
              <a
                href="https://whitepaper.interlinklabs.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  shadow-lg
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-gray-100
                  sm:px-7
                  sm:py-4
                  sm:text-base
                "
              >
                Our whitepaper
  
                <span className="text-xl leading-none">
                  →
                </span>
              </a>
  
            </div>
          </div>
        </div>
  
        {/* MOBILE GRADIENT */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-linear-to-t
            from-[#4e49d9]/50
            to-transparent
          "
        />
      </section>
    );
  };
  
  export default BuildOnInterLink;
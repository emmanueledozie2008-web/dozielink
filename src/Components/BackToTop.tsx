import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed
        bottom-6
        right-5
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#625bea]
        text-white
        shadow-[0_8px_30px_rgba(98,91,234,0.45)]
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#5149dc]
        active:scale-95
        sm:bottom-8
        sm:right-8
        sm:h-16
        sm:w-16
      "
    >
      <FaArrowUp className="text-xl sm:text-2xl" />
    </button>
  );
};

export default BackToTop;
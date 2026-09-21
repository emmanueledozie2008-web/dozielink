

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col items-center justify-center font-sans">
      
      {/* =====================================
          LOGO & SPINNER CONTAINER
      ====================================== */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Animated Spinning Ring */}
        <div className="absolute h-32 w-32 rounded-full border-4 border-[#f1f1f7] border-t-[#6c5ce7] animate-spin"></div>
        
        {/* Pulsing Glow behind logo */}
        <div className="absolute h-24 w-24 rounded-full bg-[#6c5ce7]/20 blur-xl animate-pulse"></div>
        
        {/* Logo Image */}
        <img 
          src="https://p2p-interlink.com/images/lo.png" 
          alt="InterLink Logo" 
          className="relative z-10 h-16 w-16 object-contain animate-bounce drop-shadow-md"
        />
      </div>

      {/* =====================================
          TEXT & INDICATORS
      ====================================== */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[20px] font-bold text-[#11111c] tracking-tight">
          Loading
        </h2>
        
        {/* Animated Dots */}
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#6c5ce7] animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="h-2 w-2 rounded-full bg-[#6c5ce7] animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="h-2 w-2 rounded-full bg-[#6c5ce7] animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Optional: Add a subtle text at the bottom */}
      <p className="absolute bottom-10 text-[13px] text-gray-400 font-medium">
        Securing the Human Network...
      </p>

    </div>
  );
};

export default LoadingPage;
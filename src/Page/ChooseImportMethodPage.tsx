import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChooseImportMethodPage = () => {
  const navigate = useNavigate();

  // Function to handle the back button click
  const handleBack = () => {
    navigate(-1); // This takes the user to the previous page in history
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] font-sans text-[#11111c] flex justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-white min-h-screen relative flex flex-col">
        
        {/* =====================================
            TOP DRAG HANDLE
        ====================================== */}
        <div className="flex justify-center pt-4 pb-6">
          <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
        </div>

        {/* =====================================
            HEADER
        ====================================== */}
        <header className="px-6 flex items-start gap-5 mb-8">
          <button 
            onClick={handleBack}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4f4fa] text-gray-800 transition-all hover:bg-gray-200 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Go back"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          
          <h1 className="text-[28px] font-bold tracking-tight text-[#11111c] leading-[1.2] mt-1">
            Choose import<br />method
          </h1>
        </header>

        {/* =====================================
            CONTENT
        ====================================== */}
        <main className="px-6 flex-1">
          
          {/* --- RESTORE SECTION --- */}
          <section className="mb-10">
            <h2 className="text-[15px] font-semibold text-gray-400 tracking-wide uppercase mb-4 ml-1">
              Restore
            </h2>
            
            <div className="flex flex-col gap-3">
              
              {/* Recovery Phrase Link */}
              <Link 
                to="/Validate" // <-- Link destination
                className="group flex items-center justify-between w-full rounded-3xl bg-[#f4f4fa] p-4 transition-all duration-200 hover:bg-gray-100 active:scale-[0.98] border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#11111c] text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 17.5C8 16.1193 9.11929 15 10.5 15H18.5C19.8807 15 21 16.1193 21 17.5V19C21 19.5523 20.5523 20 20 20H9C8.44772 20 8 19.5523 8 19V17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 4.5C6 3.11929 7.11929 2 8.5 2H16.5C17.8807 2 19 3.11929 19 4.5V6C19 6.55228 18.5523 7 18 7H7C6.44772 7 6 6.55228 6 6V4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 12C3 10.8954 3.89543 10 5 10H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[17px] font-bold text-[#11111c] tracking-tight">Recovery phrase</span>
                </div>
                <ChevronRight size={20} className="text-gray-400 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Google Drive Link */}
              <Link 
                to="/Validate" // <-- Link destination
                className="group flex items-center justify-between w-full rounded-3xl bg-[#f4f4fa] p-4 transition-all duration-200 hover:bg-gray-100 active:scale-[0.98] border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#11111c] text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 16C5.34315 16 4 14.6569 4 13C4 11.3431 5.34315 10 7 10C7.35064 10 7.68722 10.0602 8 10.1707C8.57702 7.84921 10.6662 6.125 13.1875 6.125C15.5 6.125 17.5 7.5 18.5 9.5C18.8284 9.5 19.144 9.54322 19.4445 9.62408C20.9385 10.0313 22 11.392 22 13C22 14.6569 20.6569 16 19 16H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[17px] font-bold text-[#11111c] tracking-tight">Google Drive</span>
                </div>
                <ChevronRight size={20} className="text-gray-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>

          {/* --- IMPORT SECTION --- */}
          <section>
            <h2 className="text-[15px] font-semibold text-gray-400 tracking-wide uppercase mb-4 ml-1">
              Import
            </h2>
            
            <div className="flex flex-col gap-3">
              
              {/* Private Key Link */}
              <Link 
                to="/Validate" // <-- Link destination
                className="group flex items-center justify-between w-full rounded-3xl bg-[#f4f4fa] p-4 transition-all duration-200 hover:bg-gray-100 active:scale-[0.98] border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#11111c] text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 7.5L19 11M19 11L21 9M19 11L17 13M12.5 10.5C11.6716 11.3284 10.3284 11.3284 9.5 10.5C8.67157 9.67157 8.67157 8.32843 9.5 7.5C10.3284 6.67157 11.6716 6.67157 12.5 7.5C13.3284 8.32843 13.3284 9.67157 12.5 10.5ZM12.5 10.5L5.5 17.5M5.5 17.5L3.5 15.5M5.5 17.5L7.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[17px] font-bold text-[#11111c] tracking-tight">Private key</span>
                </div>
                <ChevronRight size={20} className="text-gray-400 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>
          </section>

        </main>
        
        {/* Bottom safe area spacing */}
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default ChooseImportMethodPage;

import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  X,
  Wallet,
  Download,
} from "lucide-react";

const ManageWalletsPage = () => {
  const navigate = useNavigate();

  // Function to go back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] font-sans text-[#11111c] relative overflow-hidden">
      
      {/* =====================================
          BACKGROUND CONTENT (Blurred)
      ====================================== */}
      <div className="relative z-0 filter blur-[2px] opacity-70 pointer-events-none">
        
        {/* Header */}
        <header className="flex items-center justify-between px-5 pt-12 pb-6">
          {/* Clickable Back Button */}
          <button 
            onClick={handleBack}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm pointer-events-auto"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          
          <h1 className="text-[22px] font-bold tracking-tight text-[#11111c]">Manage Wallets</h1>
          <div className="w-12"></div> {/* Spacer */}
        </header>

        {/* Content */}
        <main className="px-6">
          
          {/* Wallet Section Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[28px] font-bold text-[#11111c]">Wallet 1</h2>
            <ChevronRight size={24} className="text-gray-400" />
          </div>

          {/* Account Item */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              {/* Geometric Avatar */}
              <div className="h-14 w-14 rounded-full overflow-hidden shadow-inner relative bg-linear-to-br from-purple-400 via-pink-400 to-blue-400">
                <div className="absolute inset-0 opacity-80" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,0 200,0 100,200' fill='%239d4edd' /%3E%3Cpolygon points='200,0 200,200 0,200' fill='%234bc0e8' /%3E%3Cpolygon points='0,0 100,200 0,200' fill='%2334a853' /%3E%3C/svg%3E")`,
                  backgroundSize: 'cover'
                }}></div>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#11111c]">Account #1</h3>
                <p className="text-[14px] font-medium text-gray-500 mt-0.5">$*.**</p>
              </div>
            </div>
            <button className="text-gray-400 p-2 pointer-events-auto">
              <MoreVertical size={22} />
            </button>
          </div>

          {/* Add Account Button */}
          <div className="flex items-center gap-4 py-4 mt-2 pointer-events-auto">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8e8f0]">
              <Plus size={24} className="text-gray-600" />
            </div>
            <span className="text-[17px] font-bold text-gray-600">Add Account</span>
          </div>

        </main>
      </div>

      {/* =====================================
          BOTTOM SHEET MODAL (Overlay)
      ====================================== */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-[36px] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-10">
        
        {/* Handle Bar */}
        <div className="flex justify-center mb-6">
          <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-bold tracking-tight text-[#11111c]">Add or Import Wallet</h2>
          
          {/* Functional Close Button */}
          <button 
            onClick={handleBack}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50 active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          
          {/* Create New Wallet - Fully Clickable Link */}
          <Link 
            to="/create-wallet"
            className="flex items-center justify-between w-full rounded-3xl bg-[#f4f4fa] p-4 transition-all duration-200 hover:bg-gray-100 active:scale-[0.98] border border-transparent hover:border-gray-200 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#11111c] text-white shadow-md">
                <Wallet size={22} />
              </div>
              <span className="text-[17px] font-bold text-[#11111c] tracking-tight">
                Create new wallet
              </span>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 bg-white shadow-sm transition-transform group-hover:translate-x-1">
              <Download size={18} className="rotate-90" />
            </div>
          </Link>

          {/* Import Existing Wallet - Fully Clickable Link */}
          <Link 
            to="/create-wallet" // Assuming this is where you want it to go
            className="flex items-center justify-between w-full rounded-3xl bg-[#f4f4fa] p-4 transition-all duration-200 hover:bg-gray-100 active:scale-[0.98] border border-transparent hover:border-gray-200 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#11111c] text-white shadow-md">
                <Wallet size={22} />
              </div>
              <span className="text-[17px] font-bold text-[#11111c] tracking-tight">
                Import existing wallet
              </span>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 bg-white shadow-sm transition-transform group-hover:translate-x-1">
              <Download size={18} className="rotate-90" />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ManageWalletsPage;
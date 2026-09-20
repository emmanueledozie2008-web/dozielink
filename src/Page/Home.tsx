import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Institutional from "../Components/Institutional";
import WalletSection from "../Components/WalletSection";
import InterlinkChain from "../Components/InterlinkChain";
import LatestReleases from "../Components/LatestReleases";
import BuildOnInterLink from "../Components/BuildOnInterLink";
import Footer from "../Components/Footer";
import BackToTop from "../Components/BackToTop";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Institutional/>
      <WalletSection/>
      <InterlinkChain/>
      <LatestReleases/>
      <BuildOnInterLink/>
      <Footer/>
      <BackToTop/>

      {/* Sections will be added here */}
      {/* <section className="min-h-screen bg-white" /> */}
    </div>
  );
}

export default App;
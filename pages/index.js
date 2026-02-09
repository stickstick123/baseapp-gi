import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import HeroSection from "../components/HeroSection.component";
import HorizontalScroll from "../components/HorizontalScroll.component";
import TwoColumnSection from "../components/TwoColumnSection.component";
import VideoGridSection from "../components/VideoGridSection.component";
import SlideshowSection from "../components/SlideshowSection.component";
import TwoColumnGridSection from "../components/TwoColumnGridSection.component";
import FaqSection from "../components/FaqSection";



export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
  <HorizontalScroll
  images={[
    "https://www.baseapp.com.au/images/BrandLogos/EastEndSlabs.png",
    "https://www.baseapp.com.au/images/BrandLogos/Hacker.png",
    "https://www.baseapp.com.au/images/BrandLogos/HoadDrainage.png",
    "https://www.baseapp.com.au/images/BrandLogos/BurrowsConcreting.png",
    "https://www.baseapp.com.au/images/BrandLogos/Collins.png",
    "https://www.baseapp.com.au/images/BrandLogos/DettorrePlumbing.png",
    "https://www.baseapp.com.au/images/BrandLogos/MolloysPlastering.png",
    
 
  ]}
/>
<TwoColumnSection />
<VideoGridSection />
<SlideshowSection />
<TwoColumnGridSection />
<FaqSection />

    <Footer />
    </>
  );
}

import { BrowserRouter as Router   } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HotLots from "./components/HotLots";
import SearchBar from "./components/SearchBar";
import StatsSection from "./components/StatsSection";
import ServiceSection from "./components/ServiceSection";
import CustomerReview from "./components/CustomerReview";
// import LatestNews from "./components/LatestNews";
import ContactSection from "./components/ContactSection";
import WorldMap from "./components/WorldMap";
import CarBrands from "./components/CarBrands";
function App() {

  return (
    <Router>
      <Header />
      <HeroSection />
      <SearchBar />
      <HotLots />
      <StatsSection />
      <ServiceSection />
      <CustomerReview />
      <WorldMap/>
      <CarBrands />
      <ContactSection />
     
{/*      
      <LatestNews /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
      </Routes> */}
    </Router>
  )
}

export default App

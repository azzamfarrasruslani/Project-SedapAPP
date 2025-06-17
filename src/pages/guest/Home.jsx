import HeroSection from "../../components/guest/HeroSection";
import ProdukCard from "../../components/guest/ProdukCard";
import TestimoniCard from "../../components/guest/TestimoniCard";
import AboutUs from "../../components/guest/AboutUs";
import BestRestaurantsSection from "../../components/guest/BestRestaurantsSection";
import OrderSection from "../../components/guest/OrderSection";
import SubscribeSection from "../../components/guest/SubscribeSection";
import NewsSection from "../../components/guest/NewsSection";
import PartnershipSection from "../../components/guest/PartnershipSection";
import ReviewSection from "../../components/guest/ReviewSection";
const Home = () => {
  return (
    <>
      <div >
        <HeroSection />
      </div>

      

      <AboutUs />
      <BestRestaurantsSection/>
      <OrderSection/>
      <ReviewSection/>
      {/* <ProdukCard />
      <TestimoniCard /> */}
      <PartnershipSection/>
       <NewsSection/>
      <SubscribeSection/>
     
    </>
  );
};
export default Home;

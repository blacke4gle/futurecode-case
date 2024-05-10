import React from "react";
import CarouselPage from "../components/home/CarouselPage";
import Navigatorbar from "../components/home/Navigatorbar";
import AboutUs from "../components/home/AboutUs";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div>
      {/* <Navigatorbar />
      <CarouselPage /> */}

      {/* TODO NavigationBar */}
      <Navigatorbar />

      {/* TODO Slider */}
      <CarouselPage />

      {/* TODO Hakkımızda Bölümü */}
      <AboutUs />

      {/* TODO Footer */}
      <Footer />
    </div>
  );
}

export default Home;

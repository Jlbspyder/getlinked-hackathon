import React, { useRef } from "react";
import Hero from "../components/Hero";
import BigIdea from "../components/BigIdea";
import Rules from "../components/Rules";
import Attributes from "../components/Attributes";
import Faqs from "../components/Faqs";
import TimeLine from "../components/TimeLine";
import Rewards from "../components/Rewards";
import Sponsors from "../components/Sponsors";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";
<<<<<<< HEAD
import MobileMenu from "../components/MobileMenu";
=======
>>>>>>> f5978ec9447738010b387d88575682bb6888745e

const HomePage = ({open, close}) => {
  return (
    <div>
      <MobileMenu open={open} close={close} />
      <Hero />
      <BigIdea />
      <Rules />
      <Attributes />
      <Faqs />
      <TimeLine />
      <Rewards />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  );
};

export default HomePage;

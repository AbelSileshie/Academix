import React from "react";
import Hero from "../../component/Home/Hero";
import ModeratorApplication from "../../component/Home/ModeratorApplication";
import Navigation from "../../component/Home/Navigation";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <ModeratorApplication />
    </div>
  );
};

export default Home;

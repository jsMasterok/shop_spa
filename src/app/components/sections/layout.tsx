import React from "react";
import Hero from "./components/Hero";
import Recomedations from "./components/Recomedations";
import Benefits from "./components/Benefits";
import Footer from "../Footer";
import Description from "./components/Description";

export default function SectionsLayout() {
  return (
    <div className="flex flex-col h-full w-full min-h-0 min-w-0">
      <Hero />
      <Recomedations />
      <Benefits />
      <Description />
      <Footer />
    </div>
  );
}

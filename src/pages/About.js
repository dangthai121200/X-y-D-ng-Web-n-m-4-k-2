import React from "react";
import Member from "../component/Member/Member";
import AboutContent from "../component/AboutContent/AboutContent";
import History from "../component/History/History";
import Footer from "../component/Footer/Footer";
export default function About() {
  return (
    <div>
      <div className="container">
        <AboutContent />
        <History />
        <Member />
      </div>
      <Footer />
    </div>
  );
}

import React, { ReactNode } from "react";
import Footer from "./page.elements/Footer";
import MainContent from "./page.elements/MainContent";
import Navbar from "./page.elements/Navbar";
import "./page.template.css";

interface MyComponentProps {
  props: ReactNode;
}

const PageTemplate: React.FC<MyComponentProps> = ({ props }) => {
  return (
    /*<div className="PageTemplateContainer">
      <div className="circles-blocks">
        <div className="top-circles-block">
          <div className="top-circle-1"></div>
          <div className="top-circle-2"></div>
          <div className="top-circle-3"></div>
          <div className="top-circle-4"></div>
          <div className="top-circle-5"></div>
          <div className="top-circle-6"></div>
          <div className="top-circle-7"></div>
          <div className="top-circle-8"></div>
        </div>
        <div className="bottom-circles-block">
          <div className="bottom-circle-1"></div>
          <div className="bottom-circle-2"></div>
          <div className="bottom-circle-3"></div>
          <div className="bottom-circle-4"></div>
          <div className="bottom-circle-5"></div>
          <div className="bottom-circle-6"></div>
          <div className="bottom-circle-7"></div>
          <div className="bottom-circle-8"></div>
        </div>
      </div>
      
    </div>*/
    <div className="PageSkeleton">
      <Navbar />
      <MainContent content={props} />
      <Footer />
    </div>
  );
};

export default PageTemplate;

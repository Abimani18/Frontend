import React from "react";
import "./VoiceFirstPage.scss";
import { FaArrowRight, FaPlay, FaHeadphones, FaStepForward, FaStepBackward } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const VoiceFirstPage = () => {
  return (
    <div className="voice-page mb-5 mt-5">
    
      {/* Header */}
      <div className="voice-header">
        <h1>
          Learn More About <br /> the Voice-First World.
        </h1>
        <p className="header-subtext">
          From how-tos to thought leadership — <br /> your voice-first journey
          starts here.
        </p>
      </div>

      {/* Main Cards Section */}
      <div className="voice-cards">
        {/* Left card */}
        <div className="card grey left">
          <FaArrowUpRightFromSquare className="icon-top-right" />
        </div>

        {/* Middle card */}
        <div className="card grey middle">
          <FaPlay className="icon-center" />
        </div>

        {/* Right card */}
        <div className="card grey right">
          <FaHeadphones className="icon-top-right" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="voice-bottom">
        <div className="left-section col-md-3">
          <p>
            Explore the psychology and UX principles behind natural, effective
            voice interactions — and learn how NovaVoice creates frictionless
            experiences.
          </p>
          <button className="btn-primary">
            Explore <FaArrowUpRightFromSquare />
          </button>
        </div>

        <div className="middle-section d-flex justify-content-center align-items-end gap-3">
          <div className="small-card dark">
            <div className="top-icons"><FaStepBackward />
  <FaStepForward /></div>
            <p>Download the Mobile App</p>
            <button className="btn-purple">
              Download <FaArrowUpRightFromSquare />
            </button>
          </div>
           <div className="right-section">
          <button className="btn-primary">
            Browse Articles <FaArrowRight/>
          </button>
        </div>
        </div>
      </div>
    </div>
 

  );
};

export default VoiceFirstPage;



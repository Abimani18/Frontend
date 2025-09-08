import React, { useState } from "react";
import "./Service.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import servicesData from "../../../../../data/homeData/servicesData";

const Service = () => {
  const [selectedService, setSelectedService] = useState("1");
  const [showTopic1, setShowTopic1] = useState(true);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const toggleTopic = (topic) => {
    setShowTopic1(topic === 1);
    setSelectedService("1");
  };

  const topics = showTopic1
    ? servicesData.topics[0].subtopics
    : servicesData.topics[1].subtopics;
  const topicName = [
    servicesData.topics[0].topicName,
    servicesData.topics[1].topicName,
  ];
  return (
    // <div className="center-container">
    //   <div className="service-heading-container">
    //     {topicName.map((topic, index) => (
    //       <div
    //         key={index + 1}
    //         className={`service-heading${index + 1} topic${index + 1}-service ${
    //           index === (showTopic1 ? 0 : 1) ? "topic-active" : "topic-inactive"
    //         }`}
    //         onClick={() => toggleTopic(index + 1)}
    //       >
    //         <h2>{topic}</h2>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="service-container">
    //     {(showTopic1 || !showTopic1) && (
    //       <div
    //         className={`service-topic${showTopic1 ? "1" : "2"} ${
    //           showTopic1 || !showTopic1 ? "slide-in" : ""
    //         }`}
    //       >
    //         <div className="subservice-container">
    //           <div className="subservice">
    //             <div className="subservice-heading">
    //               {topics.map((topic) => (
    //                 <div
    //                   key={topic.id}
    //                   className={`service-heading ${
    //                     topic.id === selectedService ? "selected" : ""
    //                   }`}
    //                   onClick={() => handleServiceSelection(topic.id)}
    //                 >
    //                   <h3>{topic.title}</h3>
    //                 </div>
    //               ))}
    //             </div>
    //             <div className="subservice-content">
    //               {topics.map(
    //                 (topic) =>
    //                   selectedService === topic.id && (
    //                     <div
    //                       key={topic.id}
    //                       className={`main-subservice ${topic.id}-main ${
    //                         showTopic1 ? "slide-in" : ""
    //                       }`}
    //                     >
    //                       <div className="subservicemain-content">
    //                         <h1>{topic.title}</h1>
    //                         <h3>{topic["sub-title"]}</h3>
    //                         <h6>{topic.description}</h6>

    //                         <a href={topic.link}>
    //                           <button>Know More ..</button>
    //                         </a>
    //                       </div>
    //                       <div className="subservice-image-container">
    //                         <div className="service-tem-column">
    //                           {/* Insert other content in the first column if needed */}
    //                         </div>
    //                         <div className="service-tem-column">
    //                           <div className="subservice-image">
    //                             <img src={topic.image} alt={topic.title} />
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   )
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>


    <div className="container integration-section ">
      <div className="row  align-items-center mt-5">
        {/* Left Column */}
        <div className="col-md-6 mt-5"  
        data-aos="fade-right" data-aos-duration="1000"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="title">
            Discover the intelligence <br /> behind the voice.
            <span className="arrow-line"> →</span>
          </h1>

          <div className="integration-item">
            <p>What’s the weather like in Jakarta</p>
            <span className="icon-circle">
              <FaArrowUpRightFromSquare />
            </span>
          </div>

          <div className="integration-item">
            <p>Remind me to drink water every 2 hours</p>
            <span className="icon-circle">
              <FaArrowUpRightFromSquare />
            </span>
          </div>

          <div className="integration-item">
            <p>Translate ‘good morning’ into Japanese</p>
            <span className="icon-circle">
              <FaArrowUpRightFromSquare />
            </span>
          </div>
        </div>

        {/* Right Column */}
        {/* <div className="col-md-6 d-flex justify-content-end mt-5">
            <div className="integration-card one rounded-4 position-relative mt-5">
            <button className="see-all-btn">
              See All Integrations <FaArrowUpRightFromSquare />
            </button>
          </div>
          <div className="integration-card two rounded-4 ">
          </div>
        </div> */}
         <div className="col-md-6 d-flex justify-content-end mt-5 integration-wrap"  data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div
        className="integration-card one rounded-4 position-relative mt-5"
        
      ></div>
      <div className="integration-card two rounded-4" >
        <button
          className="see-all-btn"
        >
          See All Integrations <FaArrowUpRightFromSquare />
        </button>
      </div>
    </div>

      </div>
    </div>
  );
}



export default Service;

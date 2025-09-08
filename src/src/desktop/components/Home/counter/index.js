// // Counter.js

// import React, { useState, useEffect } from 'react';
// import VisibilitySensor from 'react-visibility-sensor';
// import './counter.css';
// import counterData from '../../../../../data/homeData/counterData';

// const Counter = () => {
//   const [interactions, setInteractions] = useState(0);
//   const [transactions, setTransactions] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [projects, setProjects] = useState(0);
//   const [isCounting, setIsCounting] = useState(false);
//   const [isAnimated, setIsAnimated] = useState(false);

//   const { targetInteractions, targetTransactions, targetRating, targetProjects } = counterData;

//   const onVisibilityChange = (isVisible) => {
//     setIsCounting(isVisible);
//     if (isVisible) {
//       setIsAnimated(true);
//     }
//   };

//   useEffect(() => {
//     if (isCounting) {
//       const interactionInterval = setInterval(() => {
//         if (interactions < targetInteractions) {
//           setInteractions(interactions + 1);
//         }
//       }, 100);

//       const transactionInterval = setInterval(() => {
//         if (transactions < targetTransactions) {
//           setTransactions(transactions + 1);
//         }
//       }, 100);

//       const ratingInterval = setInterval(() => {
//         if (rating < targetRating) {
//           setRating(rating + 0.1);
//         }
//       }, 100);

//       const projectsInterval = setInterval(() => {
//         if (projects < targetProjects) {
//           setProjects(projects + 10);
//         }
//       }, 100);

//       return () => {
//         clearInterval(interactionInterval);
//         clearInterval(transactionInterval);
//         clearInterval(ratingInterval);
//         clearInterval(projectsInterval);
//       };
//     }
//   }, [interactions, transactions, rating, projects, targetInteractions, targetTransactions, targetRating, targetProjects, isCounting]);

//   return (
//     <VisibilitySensor onChange={onVisibilityChange}>
//       <div className="counter-container">
//         <div className="counter-item">
//           <div className={`counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>{interactions >= targetInteractions ? targetInteractions : interactions}+</div>
//           <div className="counter-text">Brands</div>
//         </div>

//         <div className="counter-item">
//           <div className={`counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>{transactions >= targetTransactions ? targetTransactions : transactions}+</div>
//           <div className="counter-text">Tools</div>
//         </div>

//         <div className="counter-item">
//           <div className={`counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>{rating >= targetRating ? targetRating.toFixed(1) : rating.toFixed(1)}/5</div>
//           <div className="counter-text">Ratings</div>
//         </div>

//         <div className="counter-item">
//           <div className={`counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>{projects >= targetProjects ? targetProjects : projects}+</div>
//           <div className="counter-text">Projects</div>
//         </div>
//       </div>
//     </VisibilitySensor>
//   );
// };

// export default Counter;

// PricingPage.jsx
import React from "react";
import './counter.css';
const Counter = () => {
  const plans = [
    {
      title: "Home",
      subtitle: "Homes & Casual Users",
      price: "$29.99",
      per: "/month",
      annual: "*Paid annually at $360/year",
      btnColor: "#7B4DFF",
      features: [
        "100 Mbps Download Speed",
        "Unlimited Data Usage",
        "Free Wi-Fi Router",
        "24/7 Technical Support",
      ],
    },
    {
      title: "Business",
      subtitle: "Small & Medium Businesses",
      price: "$99.99",
      per: "/month",
      annual: "*Paid annually at $1,199/year",
      highlight: true,
      features: [
        "500 Mbps Download Speed",
        "Unlimited Data with SLA",
        "Business-Class Wi-Fi Router",
        "Dedicated Customer Portal",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Large Enterprises & ISPs",
      price: "$399.99",
      per: "/month",
      annual: "*Paid annually at $4,799/year",
      features: [
        "1 Gbps+ Dedicated Bandwidth",
        "Multi-Location Connectivity",
        "Redundant Backup Connection",
        "Customizable Security Suite",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <h1>Start Free. Upgrade Anytime</h1>
      <p className="subtitle">
        Begin with everything you need – no credit card, no commitment.
      </p>
      <div className="cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.title}</h3>
            <p className="plan-subtitle">{plan.subtitle}</p>
            <h2 className="price">
              {plan.price} <span>{plan.per}</span>
            </h2>
            <p className="annual">{plan.annual}</p>
            <button className={`btn ${plan.highlight ? "dark" : ""}`}>
              Get Started
            </button>
            <div className="features">
              <h4>What included?</h4>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>+ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;

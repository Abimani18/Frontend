import React from "react";
import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  // ✅ Reusable data array
  const plans = [
    {
      label: "01 Design Subscription",
      title: "Nano",
      highlight: "dose",
      description: "One request at a time",
      buttonText: "Get me dose",
      price: "4 900",
      features: [
        "Access to all design services",
        "Bi-weekly calls and daily slack communication",
        "Available for 3 days each week",
        "Easy-to-manage ticketing system",
        "Immediate start",
      ],
    },
    {
      label: "02 Retainer",
      title: "Micro",
      highlight: "dose",
      description: "Double your delivery 2x",
      buttonText: "Get me dose",
      price: "8 900",
      badge: "Best Value to Price",
      highlighted: true,
      features: [
        "All from Nanodose membership",
        "Direct comms in Slack + weekly sync",
        "No-code development for free",
        "Available for 5 days each week",
        "Delivery in avg. 48 hours",
        "Easy-to-manage ticketing system in Notion",
        "Immediate start",
      ],
    },
    {
      label: "03 MVP",
      title: "Custom",
      highlight: "dose",
      description: "Fitting your individual project needs",
      buttonText: "Book a call",
      price: "10 000",
      features: [
        "Custom scope",
        "Dedicated team",
        "Fixed deadlines",
        "Strategic and Consulting Sessions bi-weekly",
        "Payment plan based on milestones",
      ],
    },
  ];

  // ✅ Reusable Card Component (inside same file)
  const PricingCard = ({ plan }) => (
    <div className={`pricing-card  shadow-lg rounded-4 ${plan.highlighted ? "" : ""}`}>
      {plan.badge && <div className="best-badge">{plan.badge}</div>}
      <p className="plan-label">{plan.label}</p>
      <h3 className="plan-title">
        {plan.title} <span>{plan.highlight}</span>
      </h3>
      <p className="plan-desc">{plan.description}</p>
      <div className="d-flex align-items-center gap-3">
           <button className={`w-50 p-2 ${plan.highlighted ? "btn-outline" : "btn-outline"} `}>
        {plan.buttonText}
      </button>
      <h3 className="price fs-3 ">
        {plan.price} <span>/month</span>
      </h3>
      </div>
      <hr />
      <ul className="features">
        {plan.features.map((feature, i) => (
          <li key={i} className="d-flex gap-3 fs-6"><FaCheck style={{color:"green"}}/>{feature}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="pricing-section">
      <h2 className="title fs-1">
        Transparent pricing, with top tier design partner
      </h2>
      <p className="subtitle">
        Transparent pricing tailored to your needs, ensuring affordability
        without compromising on quality.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;

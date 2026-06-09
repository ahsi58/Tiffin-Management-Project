import React from 'react'
import Navbar from '../../components/Navbar'
import "./Subscription.css";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

function Subscription() {

  const navigate = useNavigate();
  const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

  const plans = [
    {
      title: "6 Meals",
      price: "480",
      features: [
        "6 meals delivery",
        "Skip weekends",
        "Change address once/week",
        "Email support"
      ]
    },
    {
      title: "15 Meals",
      price: "1100",
      features: [
        "15 meals delivery",
        "Flexible schedule",
        "Change address twice/week",
        "Priority support"
      ]
    },
  ];

  return (
    <>
    <Navbar />
    <div className="subscription-page">

      <h1>Choose Your Plan</h1>
      <h3>Flexible Subscription Plans pause or cancel anytime</h3>

      <div className="plans-container">

        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>

            <h2>{plan.title}</h2>

            <div className="price">
              ₹{plan.price}
              <span>/month</span>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
  disabled={currentUser?.role === "member"}
  onClick={() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    if (currentUser.role === "vendor") {
      alert("Vendors cannot subscribe.");
      return;
    }

    if (currentUser.role === "member") {
      return;
    }

    alert("Subscription Activated!");
  }}
>
  {!currentUser
    ? "Login to Subscribe"
    : currentUser.role === "member"
    ? "Already Subscribed"
    : "Subscribe"}
</button>

          </div>
        ))}

      </div>

    </div>
    <Footer/>
    </>
  );
}

export default Subscription;

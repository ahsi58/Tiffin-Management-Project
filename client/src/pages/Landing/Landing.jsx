import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Landing.css";
import Footer from "../../components/Footer/Footer";

function Landing() {
  const navigate = useNavigate()
  return (
    <>
      
  <Navbar />

  <div className="landing-container">

    {/* Hero Section */}
    <div className="back-img">
      <div className="text">
        <h1>Fresh Homemade Tiffins Daily</h1>

        <p>
          Healthy, affordable and delicious meals for
          students and professionals.
        </p>

        <button
          className="get-started"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>

    {/* Features Section */}
    <section className="features-section">
      <h2>Why Choose TiffinHub?</h2>

      <div className="features-grid">

        <div className="feature-card">
          <h3>Fresh Meals</h3>
          <p>Prepared daily with fresh ingredients.</p>
        </div>

        <div className="feature-card">
          <h3>Affordable Plans</h3>
          <p>Budget-friendly subscriptions for everyone.</p>
        </div>

        <div className="feature-card">
          <h3>On-Time Delivery</h3>
          <p>Reliable delivery right to your doorstep.</p>
        </div>

      </div>
    </section>

    {/* How It Works */}
    <section className="how-it-works">

      <h2>How It Works</h2>

      <div className="steps">

        <div className="step">
          <span>1</span>
          <h3>Register</h3>
          <p>Create an account in minutes.</p>
        </div>

        <div className="step">
          <span>2</span>
          <h3>Choose a Plan</h3>
          <p>Select a subscription plan that suits you.</p>
        </div>

        <div className="step">
          <span>3</span>
          <h3>Enjoy Meals</h3>
          <p>Get fresh tiffins delivered every day.</p>
        </div>

      </div>

    </section>

    {/* CTA Section */}
    <section className="cta-section">

      <h2>Ready to Start?</h2>

      <p>
        Join hundreds of happy customers enjoying
        homemade meals every day.
      </p>

      <button
        className="cta-btn"
        onClick={() => navigate("/register")}
      >
        Register Now
      </button>

    </section>

  </div>

  <Footer />

    </>
  );
}

export default Landing;
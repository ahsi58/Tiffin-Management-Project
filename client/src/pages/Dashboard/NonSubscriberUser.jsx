import { useState } from "react";
import "./NonSubscriberUser.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1>
            Welcome, <span>Rahul</span> 👋
          </h1>
          <p>Order today's tiffin or subscribe for daily deliveries</p>
        </div>

        <div className="guest-badge">GUEST USER</div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "today" ? "active" : ""}
          onClick={() => setActiveTab("today")}
        >
          Today's Tiffin
        </button>

        <button
          className={activeTab === "menu" ? "active" : ""}
          onClick={() => setActiveTab("menu")}
        >
          Weekly Menu
        </button>

        <button
          className={activeTab === "subscribe" ? "active" : ""}
          onClick={() => setActiveTab("subscribe")}
        >
          Subscribe & Save
        </button>
      </div>

      {activeTab === "today" && (
        <div className="card special-card">
          <h2>🍛 Today's Special</h2>

          <p>Palak Paneer · Steamed Rice · Roti x3 · Raita · Papad</p>

          <button className="orange-btn">Order Now — ₹80</button>
        </div>
      )}

      {activeTab === "menu" && (
        <div className="card">
          <div className="icon">📋</div>

          <h2>Weekly Menu</h2>

          <p>See what's on the menu for the full week — Monday to Sunday.</p>

          <button className="link-btn">View Menu →</button>
        </div>
      )}

      {activeTab === "subscribe" && (
        <div className="card">
          <div className="icon">🎟️</div>

          <h2>Subscribe & Save</h2>

          <p>
            Get daily tiffins at a discounted rate. Weekly, fortnightly &
            monthly plans.
          </p>

          <button className="link-btn">View Plans →</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

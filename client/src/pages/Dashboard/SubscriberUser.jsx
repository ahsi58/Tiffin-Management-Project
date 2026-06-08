import "./SubscriberUser.css";

function SubscriberUser() {
  return (
    <div className="subscriber-page">
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h1>
            Welcome, <span>Rahul</span> 👋
          </h1>
          <p>Monthly Lunch Plan</p>
        </div>

        <div className="status-badge">ACTIVE</div>
      </div>

      {/* Today's Meal */}
      <div className="meal-card">
        <div>
          <h2>🍛 Today's Special</h2>

          <p className="meal-items">
            Palak Paneer • Rice • Roti x3 • Raita • Papad
          </p>

          <p className="delivery-time">🚚 Delivery Today • 12:30 PM</p>
        </div>

        <div className="food-image">🍱</div>
      </div>

      {/* Quick Actions */}
      <div className="actions">
        <div className="action-card">
          <h3>⏸ Pause Plan</h3>
          <p>Pause deliveries temporarily</p>
        </div>

        <div className="action-card">
          <h3>🔄 Change Plan</h3>
          <p>Upgrade or downgrade plan</p>
        </div>

        <div className="action-card">
          <h3>📋 Weekly Menu</h3>
          <p>Check upcoming meals</p>
        </div>
      </div>

      {/* Subscription Summary */}
      <div className="summary-card">
        <h2>📦 Subscription Summary</h2>

        <div className="summary-grid">
          <div>
            <span>Plan</span>
            <h4>Monthly Lunch</h4>
          </div>

          <div>
            <span>Start Date</span>
            <h4>01 Jun 2026</h4>
          </div>

          <div>
            <span>Expiry Date</span>
            <h4>30 Jun 2026</h4>
          </div>

          <div>
            <span>Remaining Days</span>
            <h4>22 Days</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriberUser;

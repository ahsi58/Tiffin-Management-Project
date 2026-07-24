import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Vendordashboard.css";
import Footer from "../../components/Footer/Footer";

const MOCK_ORDERS = [
  { id: "#1021", customer: "Rahul Sharma", meal: "Dal Rice + Sabzi", time: "12:30 PM", status: "Pending" },
  { id: "#1022", customer: "Priya Mehta", meal: "Roti + Paneer", time: "12:45 PM", status: "Preparing" },
  { id: "#1023", customer: "Amit Verma", meal: "Dal Rice + Sabzi", time: "01:00 PM", status: "Pending" },
  { id: "#1024", customer: "Sneha Joshi", meal: "Veg Thali", time: "01:15 PM", status: "Ready" },
  { id: "#1025", customer: "Kavya Nair", meal: "Roti + Dal", time: "01:30 PM", status: "Pending" },
];

const MOCK_HISTORY = [
  { date: "Jun 8, 2026", orders: 22, revenue: "₹4,400" },
  { date: "Jun 7, 2026", orders: 28, revenue: "₹5,600" },
  { date: "Jun 6, 2026", orders: 19, revenue: "₹3,800" },
  { date: "Jun 5, 2026", orders: 31, revenue: "₹6,200" },
  { date: "Jun 4, 2026", orders: 25, revenue: "₹5,000" },
];

const MOCK_MENU = [
  { id: 1, name: "Dal Rice + Sabzi", type: "Lunch", price: "₹80", available: true },
  { id: 2, name: "Roti + Paneer Curry", type: "Lunch", price: "₹100", available: true },
  { id: 3, name: "Veg Thali", type: "Lunch", price: "₹120", available: true },
  { id: 4, name: "Roti + Dal", type: "Dinner", price: "₹70", available: true },
  { id: 5, name: "Khichdi + Papad", type: "Dinner", price: "₹60", available: false },
  { id: 6, name: "Rajma Rice", type: "Dinner", price: "₹90", available: true },
  { id: 7, name: "Chole Bhature", type: "Special", price: "₹110", available: true },
];

function Vendordashboard() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [activeTab, setActiveTab] = useState("overview");
  const [acceptingOrders, setAcceptingOrders] = useState(true);
  const [menuItems, setMenuItems] = useState(MOCK_MENU);
  const [orders, setOrders] = useState(MOCK_ORDERS);

  if (!currentUser || currentUser.role !== "vendor") {
    navigate("/login");
    return null;
  }

  const vendorName = "Meena Ji";
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const pendingCount = orders.filter((o) => o.status === "Pending").length;

  const toggleItemAvailability = (id) => {
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  const statusColor = (status) => {
    if (status === "Pending") return "status-pending";
    if (status === "Preparing") return "status-preparing";
    if (status === "Ready") return "status-ready";
    return "";
  };

  return (
    <>
      <Navbar />
      <div className="vd-container">
        {/* Header */}
        <div className="vd-header">
          <div>
            <h1 className="vd-greeting">
              {greeting}, <span className="vd-name">{vendorName}</span> 👋
            </h1>
            <p className="vd-subtext">
              {dateStr} · Vendor Dashboard
            </p>
          </div>
          <div className="vd-badge">VENDOR</div>
        </div>

        {/* Tabs */}
        <div className="vd-tabs">
          {["overview", "orders", "menu", "history"].map((tab) => (
            <button
              key={tab}
              className={`vd-tab ${activeTab === tab ? "vd-tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("history", "Order History").replace("menu", "Update Menu")}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW TAB ── */}
        {activeTab === "overview" && (
          <>
            <div className="vd-stats-grid">
            <div className="vd-stat-card">
                <div className="vd-stat-icon">🍱</div>
                <div className="vd-stat-number">{orders.length}</div>
                <div className="vd-stat-label">Orders to Prepare Today</div>
                <button
                className="vd-stat-link"
                onClick={() => setActiveTab("orders")}
                >
                View all orders →
                </button>
            </div>

            <div className="vd-stat-card">
                <div className="vd-stat-icon">📦</div>
                <div className="vd-stat-number">312</div>
                <div className="vd-stat-label">Total Orders This Month</div>
                <button
                className="vd-stat-link"
                onClick={() => setActiveTab("history")}
                >
                Order history →
                </button>
            </div>

            <div className="vd-stat-card">
                <div className="vd-stat-icon">📋</div>
                <div className="vd-stat-number">{menuItems.length}</div>
                <div className="vd-stat-label">Menu Items This Week</div>
                <button
                className="vd-stat-link"
                onClick={() => setActiveTab("menu")}
                >
                Update menu →
                </button>
            </div>

            <div className="vd-stat-card">
                <div className="vd-stat-icon">👥</div>
                <div className="vd-stat-number">58</div>
                <div className="vd-stat-label">Active Subscribers</div>
                <button
                className="vd-stat-link"
                onClick={() => setActiveTab("orders")}
                >
                View subscribers →
                </button>
            </div>
            </div>

            {/* Order Acceptance Toggle */}
            <div className="vd-toggle-card">
              <div className="vd-toggle-left">
                <h3 className="vd-toggle-title">Order Acceptance</h3>
                <p className="vd-toggle-desc">
                  Toggle this to start or stop accepting new orders for today.
                </p>
              </div>
              <div className="vd-toggle-right">
                {acceptingOrders ? (
                  <span className="vd-accepting-badge">✅ Accepting Orders</span>
                ) : (
                  <span className="vd-rejecting-badge">🚫 Not Accepting</span>
                )}
                <div
                  className={`vd-toggle-switch ${acceptingOrders ? "vd-toggle-on" : "vd-toggle-off"}`}
                  onClick={() => setAcceptingOrders(!acceptingOrders)}
                >
                  <div className="vd-toggle-knob" />
                </div>
              </div>
            </div>

            {/* Pending Orders Quick View */}
            {pendingCount > 0 && (
              <div className="vd-pending-banner">
                <span>🔔 You have <strong>{pendingCount} pending orders</strong> waiting to be prepared.</span>
                <button className="vd-stat-link" onClick={() => setActiveTab("orders")}>
                  View now →
                </button>
              </div>
            )}
          </>
        )}

        {/* ── ORDERS TAB ── */}
        {activeTab === "orders" && (
          <div className="vd-section">
            <div className="vd-section-header">
              <h2 className="vd-section-title">Today's Orders</h2>
              <span className="vd-section-count">{orders.length} total</span>
            </div>
            <div className="vd-orders-table-wrap">
              <table className="vd-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Meal</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="vd-order-id">{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.meal}</td>
                      <td>{order.time}</td>
                      <td>
                        <span className={`vd-status-badge ${statusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <select
                          className="vd-status-select"
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        >
                          <option>Pending</option>
                          <option>Preparing</option>
                          <option>Ready</option>
                          {/* <option>Delivered</option> */}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── MENU TAB ── */}
        {activeTab === "menu" && (
          <div className="vd-section">
            <div className="vd-section-header">
              <h2 className="vd-section-title">Weekly Menu</h2>
              <span className="vd-section-count">{menuItems.length} items</span>
            </div>
            <div className="vd-menu-grid">
              {menuItems.map((item) => (
                <div className={`vd-menu-card ${!item.available ? "vd-menu-unavailable" : ""}`} key={item.id}>
                  <div className="vd-menu-top">
                    <div>
                      <div className="vd-menu-name">{item.name}</div>
                      <div className="vd-menu-meta">
                        <span className="vd-menu-type">{item.type}</span>
                        <span className="vd-menu-price">{item.price}</span>
                      </div>
                    </div>
                    <div
                      className={`vd-toggle-switch vd-toggle-small ${item.available ? "vd-toggle-on" : "vd-toggle-off"}`}
                      onClick={() => toggleItemAvailability(item.id)}
                    >
                      <div className="vd-toggle-knob" />
                    </div>
                  </div>
                  <div className={`vd-menu-availability ${item.available ? "available" : "unavailable"}`}>
                    {item.available ? "Available Today" : "Unavailable"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── HISTORY TAB ── */}
        {activeTab === "history" && (
          <div className="vd-section">
            <div className="vd-section-header">
              <h2 className="vd-section-title">Order History</h2>
              <span className="vd-section-count">Last 5 days</span>
            </div>
            <div className="vd-history-cards">
              {MOCK_HISTORY.map((day, i) => (
                <div className="vd-history-card" key={i}>
                  <div className="vd-history-date">{day.date}</div>
                  <div className="vd-history-row">
                    <span>Orders Completed</span>
                    <strong>{day.orders}</strong>
                  </div>
                  <div className="vd-history-row">
                    <span>Revenue Earned</span>
                    <strong className="vd-history-rev">{day.revenue}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Vendordashboard;

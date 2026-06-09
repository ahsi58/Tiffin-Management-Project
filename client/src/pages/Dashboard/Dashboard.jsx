import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [activeTab, setActiveTab] = useState("dashboard");
  const [status, setStatus] = useState("Active");

  const handlePauseResume = () => {
    setStatus(
      status === "Active" ? "Paused" : "Active"
    );
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <h1>
              Hey, {currentUser?.username || "User"} 
            </h1>

            <p>
              Welcome back to your Tiffin Dashboard
            </p>
          </div>

          <div className="subscriber-badge">
            SUBSCRIBER
          </div>
        </div>

        {/* Tabs */}

        <div className="tabs">

          <button
            className={
              activeTab === "dashboard"
                ? "active-tab"
                : ""
            }
            onClick={() =>
              setActiveTab("dashboard")
            }
          >
            My Dashboard
          </button>

          <button
            className={
              activeTab === "history"
                ? "active-tab"
                : ""
            }
            onClick={() =>
              setActiveTab("history")
            }
          >
            Order History
          </button>

          <button
            className={
              activeTab === "settings"
                ? "active-tab"
                : ""
            }
            onClick={() =>
              setActiveTab("settings")
            }
          >
            Settings
          </button>

        </div>

        {/* MY DASHBOARD */}

        {activeTab === "dashboard" && (
          <>

            {/* Subscription Card */}

            <div className="card">

               <div className="status-badge">
                📦 Active Subscription
              </div>

              <div
                className={
                  status === "Active"
                    ? "status active"
                    : "status paused"
                }
              >
                {status}
              </div>

              <h2>30 Meal Plan</h2>

              <p>
                Meals Remaining: 12
              </p>

              <p>
                Renewal Date: 30 June
              </p>

              <button
                className="pause-btn"
                onClick={handlePauseResume}
              >
                {
                  status === "Active"
                    ? "Pause Subscription"
                    : "Resume Subscription"
                }
              </button>

            </div>

            {/* Today's Tiffin */}

            <div className="card">

              <h2>Today's Tiffin</h2>

              {status === "Active" ? (
                <>
                  <p>Palak Paneer</p>
                  <p>3 Rotis</p>
                  <p>Rice</p>
                  <p>Raita</p>

                  <p className="delivery">
                    Recieving Today's Tiffin
                  </p>
                </>
              ) : (
                <p className="paused-text">
                  Subscription paused.
                  No meal scheduled today.
                </p>
              )}

            </div>

            {/* Statistics */}

            <div className="card">

              <h2>Statistics</h2>

              <div className="stats">

                <div className="stat-box">
                  <h3>128</h3>
                  <p>Total Tiffins</p>
                </div>

                <div className="stat-box">
                  <h3>22</h3>
                  <p>This Month</p>
                </div>

                <div className="stat-box">
                  <h3>12</h3>
                  <p>Meals Left</p>
                </div>

              </div>

            </div>

          </>
        )}

        {/* ORDER HISTORY */}

        {activeTab === "history" && (
          <div className="card">

            <h2>Order History</h2>

            <table className="history-table">

              <thead>
                <tr>
                  <th>Date</th>
                  <th>Meal</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>08 Jun</td>
                  <td>Lunch</td>
                  <td>Recieved</td>
                </tr>

                <tr>
                  <td>07 Jun</td>
                  <td>Lunch</td>
                  <td>Received</td>
                </tr>

                <tr>
                  <td>06 Jun</td>
                  <td>Lunch</td>
                  <td>Received</td>
                </tr>
              </tbody>

            </table>

          </div>
        )}

        {/* SETTINGS */}

        {activeTab === "settings" && (
          <div className="card">

            <h2>Profile Settings</h2>

            <p>
              <strong>Name:</strong>{" "}
              {currentUser?.username || "User"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              user@gmail.com
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              9876543210
            </p>


            <button className="edit-btn">
              Edit Profile
            </button>

          </div>
        )}

      </div>
    </>
  );
}

export default Dashboard;
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <SignedIn>
          <div className="header-content">
            <h2>
              Welcome,{" "}
              {isLoaded ? user?.fullName || user?.username || "User" : "Loading..."}
            </h2>
            <UserButton />
          </div>
        </SignedIn>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <SignedIn>
          <div className="dashboard-content">
            <div className="dashboard-actions">
              <button 
                onClick={() => (window.location.href = "/user")}
                className="action-button"
              >
                Go to User Page
              </button>
            </div>

            {/* Dashboard Cards/Widgets */}
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3>Recent Activity</h3>
                <p>Your recent activities will appear here.</p>
              </div>
              
              <div className="dashboard-card">
                <h3>Quick Stats</h3>
                <p>Key metrics and statistics.</p>
              </div>
              
              <div className="dashboard-card">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button className="quick-action-btn">New Project</button>
                  <button className="quick-action-btn">View Reports</button>
                  <button className="quick-action-btn">Settings</button>
                </div>
              </div>
            </div>
          </div>
        </SignedIn>
      </main>
    </div>
  );
};

export default Dashboard;
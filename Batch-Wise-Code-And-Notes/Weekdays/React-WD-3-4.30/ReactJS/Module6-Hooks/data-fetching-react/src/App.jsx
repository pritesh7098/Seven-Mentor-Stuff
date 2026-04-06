// /* import React, { useEffect, useState } from "react";

// // step 1 : function for fetching userData

// function UserProfile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* -------------------------------------- */

//   // step 2

//   useEffect(() => {
//     fetch("https://api.github.com/users/pritesh7098")
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []); // run atleast once on mount

//   // step 3
//   if (loading) return <p>Loading .....</p>;
//   if (error) return <p>Error 404</p>;

//   return (
//     <div>
//       <h2>User Name : {user.name}</h2>
//       <p>ID:{user.id}</p>
//       <p>Location : {user.location}</p>
//       <p>Following : {user.following}</p>
//       <p>Followers:{user.followers}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <UserProfile />
//     </div>
//   );
// }

// export default App;
//  */


/* -------------------------------------------------------------------------------------------------------------- */

/* Ai generated design  */

import React, { useEffect, useState } from "react";

/**
 * UserProfile Component
 *
 * This component demonstrates data fetching in React using useEffect hook.
 * It fetches user data from JSONPlaceholder API and displays it in a card layout.
 *
 * Key Concepts Covered:
 * - useEffect for side effects (API calls)
 * - useState for managing component state
 * - Conditional rendering based on loading/error states
 * - Promise handling with .then() and .catch()
 */
function UserProfile() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================

  /**
   * user: Stores the fetched user data object
   * Initially null, populated after successful API call
   */
  const [user, setUser] = useState(null);

  /**
   * loading: Tracks the loading state of the API call
   * true = data is being fetched, false = fetch completed
   */
  const [loading, setLoading] = useState(true);

  /**
   * error: Stores any error message if the fetch fails
   * null = no error, string = error message
   */
  const [error, setError] = useState(null);

  // ============================================
  // DATA FETCHING LOGIC
  // ============================================

  /**
   * useEffect Hook
   * Runs once after component mounts (empty dependency array [])
   * Fetches user data from JSONPlaceholder API
   */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => res.json()) // Parse JSON response
      .then((data) => {
        setUser(data); // Store user data in state
        setLoading(false); // Disable loading state
      })
      .catch((err) => {
        setError(err.message); // Store error message
        setLoading(false); // Disable loading state
      });
  }, []); // Empty dependency array = run once on mount

  // ============================================
  // CONDITIONAL RENDERING
  // ============================================

  /**
   * Loading State
   * Display animated loader while data is being fetched
   */
  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Loading user data...</p>
        <p style={styles.loadingSubtext}>
          Please wait while we fetch the information
        </p>
      </div>
    );
  }

  /**
   * Error State
   * Display error message if the fetch fails
   */

  if(error) return "error"

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <div style={styles.errorIcon}>❌</div>
        <h3 style={styles.errorTitle}>Oops! Something went wrong</h3>
        <p style={styles.errorMessage}>{error}</p>
        <button
          style={styles.retryButton}
          onClick={() => window.location.reload()}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#c53030")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#e53e3e")}
        >
          Try Again
        </button>
      </div>
    );
  }

  /**
   * Success State
   * Display user data in a beautiful card layout
   * Shows: name, email, phone, website, address, and company info
   */
  return (
    <div style={styles.container}>
      {/* Main User Card */}
      <div style={styles.card}>
        {/* Card Header with Gradient */}
        <div style={styles.cardHeader}>
          <div style={styles.headerContent}>
            {/* User Avatar */}
            <div style={styles.avatar}>
              <span style={styles.avatarIcon}>👤</span>
            </div>
            {/* User Name */}
            <div>
              <h2 style={styles.userName}>{user.name}</h2>
              <p style={styles.username}>@{user.username}</p>
            </div>
          </div>
        </div>

        {/* Card Body with User Details */}
        <div style={styles.cardBody}>
          {/* Contact Information Section */}
          <div style={styles.gridContainer}>
            {/* Email */}
            <div style={styles.infoBox}>
              <span style={styles.icon}>📧</span>
              <div>
                <p style={styles.label}>Email</p>
                <p style={styles.value}>{user.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div style={styles.infoBox}>
              <span style={styles.icon}>📞</span>
              <div>
                <p style={styles.label}>Phone</p>
                <p style={styles.value}>{user.phone}</p>
              </div>
            </div>

            {/* Website */}
            <div style={styles.infoBox}>
              <span style={styles.icon}>🌐</span>
              <div>
                <p style={styles.label}>Website</p>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {user.website}
                </a>
              </div>
            </div>

            {/* Address */}
            <div style={styles.infoBox}>
              <span style={styles.icon}>📍</span>
              <div>
                <p style={styles.label}>Address</p>
                <p style={styles.value}>
                  {user.address.street}, {user.address.suite}
                </p>
                <p style={styles.addressDetail}>
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div style={styles.companySection}>
            <div style={styles.companyBox}>
              <span style={styles.icon}>🏢</span>
              <div style={styles.companyContent}>
                <p style={styles.label}>Company</p>
                <p style={styles.companyName}>{user.company.name}</p>
                <p style={styles.companyCatchphrase}>
                  "{user.company.catchPhrase}"
                </p>
                <p style={styles.companyBs}>{user.company.bs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * App Component (Main Container)
 *
 * Root component that renders the application title and UserProfile component
 * Demonstrates component composition in React
 */
function App() {
  return (
    <div style={styles.app}>
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>React Data Fetching Demo</h1>
        <p style={styles.subtitle}>
          Using useEffect Hook to Fetch and Display User Data
        </p>
        <div style={styles.badge}>
          <span style={styles.badgeText}>API: JSONPlaceholder</span>
        </div>
      </div>

      {/* User Profile Component */}
      <UserProfile />

      {/* Footer Note */}
      <div style={styles.footer}>
        <p>
          💡 This demo showcases React hooks, API integration, and modern UI
          design
        </p>
      </div>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// Plain CSS-in-JS for easy customization
// ============================================

const styles = {
  // App Container Styles
  app: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)",
    padding: "50px 20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  // Header Styles
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#2d3748",
    margin: "0 0 15px 0",
  },
  subtitle: {
    fontSize: "18px",
    color: "#718096",
    margin: "0 0 20px 0",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "white",
    padding: "10px 25px",
    borderRadius: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  badgeText: {
    fontSize: "14px",
    color: "#718096",
  },

  // Loading Styles
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    background: "linear-gradient(135deg, #ebf4ff 0%, #e0e7ff 100%)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #e0e7ff",
    borderTop: "5px solid #5a67d8",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#4a5568",
    fontWeight: "500",
  },
  loadingSubtext: {
    fontSize: "14px",
    color: "#718096",
    marginTop: "10px",
  },

  // Error Styles
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    background: "linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px",
  },
  errorIcon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  errorTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#c53030",
    marginBottom: "10px",
  },
  errorMessage: {
    color: "#718096",
    fontSize: "16px",
  },
  retryButton: {
    marginTop: "25px",
    padding: "12px 30px",
    backgroundColor: "#e53e3e",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },

  // Card Styles
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
  },
  cardHeader: {
    background: "linear-gradient(135deg, #5a67d8 0%, #9f7aea 100%)",
    padding: "40px",
    color: "white",
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    fontSize: "40px",
  },
  avatarIcon: {
    color: "#5a67d8",
  },
  userName: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "0",
  },
  username: {
    color: "#c3dafe",
    margin: "5px 0 0 0",
    fontSize: "16px",
  },

  // Card Body Styles
  cardBody: {
    padding: "40px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  infoBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    padding: "20px",
    backgroundColor: "#f7fafc",
    borderRadius: "12px",
    transition: "background-color 0.3s",
    cursor: "pointer",
  },
  icon: {
    fontSize: "24px",
    flexShrink: 0,
    marginTop: "3px",
  },
  label: {
    fontSize: "12px",
    color: "#718096",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 5px 0",
  },
  value: {
    fontSize: "16px",
    color: "#2d3748",
    fontWeight: "500",
    margin: "0",
  },
  link: {
    fontSize: "16px",
    color: "#5a67d8",
    fontWeight: "500",
    textDecoration: "none",
  },
  addressDetail: {
    fontSize: "14px",
    color: "#718096",
    margin: "5px 0 0 0",
  },

  // Company Section Styles
  companySection: {
    borderTop: "2px solid #e2e8f0",
    paddingTop: "30px",
    marginTop: "20px",
  },
  companyBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    padding: "25px",
    backgroundColor: "#ebf4ff",
    borderRadius: "12px",
  },
  companyContent: {
    flex: 1,
  },
  companyName: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2d3748",
    margin: "0 0 8px 0",
  },
  companyCatchphrase: {
    fontSize: "16px",
    color: "#4a5568",
    fontStyle: "italic",
    margin: "0 0 10px 0",
  },
  companyBs: {
    fontSize: "14px",
    color: "#718096",
    margin: "0",
  },

  // Footer Styles
  footer: {
    textAlign: "center",
    marginTop: "50px",
    color: "#718096",
    fontSize: "14px",
  },
};

// Add keyframes animation for spinner
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Hover effect for info boxes */
  div[style*="backgroundColor: rgb(247, 250, 252)"]:hover {
    background-color: #edf2f7 !important;
  }
`;
document.head.appendChild(styleSheet);

export default App;

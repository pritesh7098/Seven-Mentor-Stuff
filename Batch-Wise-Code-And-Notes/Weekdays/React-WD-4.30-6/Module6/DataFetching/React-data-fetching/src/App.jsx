/* import React, { useEffect, useState } from "react";

function App() {
  // logic

  // step 1 - defined your states

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // step 2 - actual fetching logic

  useEffect(() => {
    fetch("https://api.github.com/users/pritesh7098")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // runs only on mount for the 1st time

  // UI

  if (loading) return <p>Laoding .....</p>;
  if (error) return <p>Something went wrong ! {error} </p>;


  // step 3 - showcase on UI

  return (
    <div>
      <h1>Data fetching in react js</h1>
      <h2>Name : {data.name}</h2>
      <h2>Followers : {data.followers}</h2>
      <h2>Twitter : {data.twitter_username}</h2>
    </div>
  );
}

export default App;
 */

/* ----------------------------------------------------------------------------------- */

import React, { useEffect, useState } from "react";

function App() {
  // ---------------- LOGIC (UNCHANGED) ----------------

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/pritesh7098")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ---------------- UI ----------------

  // Loader UI
  if (loading) {
    return (
      <div style={styles.centerContainer}>
        <div style={styles.loader}></div>
        <p style={styles.text}>Loading data...</p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div style={styles.centerContainer}>
        <div style={styles.errorBox}>
          <h2>⚠️ Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>GitHub Profile</h1>

      <div style={styles.card}>
        <img src={data.avatar_url} alt="avatar" style={styles.avatar} />

        <h2 style={styles.name}>{data.name}</h2>

        <p style={styles.info}>
          <strong>Followers:</strong> {data.followers}
        </p>

        <p style={styles.info}>
          <strong>Twitter:</strong> {data.twitter_username || "Not available"}
        </p>
      </div>
    </div>
  );
}

// ---------------- STYLES ----------------

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },

  heading: {
    marginBottom: "20px",
  },

  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "280px",
  },

  avatar: {
    width: "100px",
    borderRadius: "50%",
    marginBottom: "15px",
  },

  name: {
    marginBottom: "10px",
  },

  info: {
    margin: "5px 0",
  },

  centerContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: "10px",
  },

  errorBox: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffe5e5",
    color: "#b30000",
    textAlign: "center",
  },

  loader: {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid #333",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// Add keyframes manually (important for inline CSS)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`,
  styleSheet.cssRules.length,
);

export default App;

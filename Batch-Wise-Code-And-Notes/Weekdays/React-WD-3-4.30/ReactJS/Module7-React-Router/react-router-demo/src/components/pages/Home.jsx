// Home Component
// Clean hero-style layout

export function Home() {
  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "linear-gradient(to right, #e0f2fe, #f8fafc)",
        minHeight: "80vh",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
          color: "#0f172a",
        }}
      >
        Welcome to CodeCanvas 🚀
      </h1>

      {/* Sub text */}
      <p
        style={{
          fontSize: "18px",
          color: "#475569",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        Turn your code into beautiful images effortlessly. Perfect for sharing,
        teaching, and showcasing your work.
      </p>

      {/* Button */}
      <button
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = "#0ea5e9")
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = "#38bdf8")
        }
      >
        Get Started
      </button>
    </div>
  );
}
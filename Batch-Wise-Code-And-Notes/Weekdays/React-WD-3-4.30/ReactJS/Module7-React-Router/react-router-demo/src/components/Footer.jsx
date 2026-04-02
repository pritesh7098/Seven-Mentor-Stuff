// Footer Component
// Simple, clean and professional layout using inline CSS

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#cbd5f5",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px",
            color: "#ffffff",
          }}
        >
          CodeCanvas
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
          }}
        >
          Turn your code into beautiful images effortlessly 🚀
        </p>
      </div>

      {/* Links Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "15px",
          flexWrap: "wrap",
        }}
      >
        {["Privacy", "Terms", "Support"].map((item, index) => (
          <span
            key={index}
            style={{
              cursor: "pointer",
              fontSize: "14px",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#38bdf8")}
            onMouseOut={(e) => (e.target.style.color = "#cbd5f5")}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Bottom Section */}
      <p
        style={{
          fontSize: "13px",
          margin: 0,
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} CodeCanvas. All rights reserved.
      </p>
    </footer>
  );
}
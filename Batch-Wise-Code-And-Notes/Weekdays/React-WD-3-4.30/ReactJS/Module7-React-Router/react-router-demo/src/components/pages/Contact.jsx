// Contact Component
// Simple form layout (UI only)

export function Contact() {
  return (
    <div
      style={{
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Form Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          backgroundColor: "#ffffff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Contact Us
        </h2>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          style={inputStyle}
        />

        {/* Button */}
        <button
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

// Reusable input style (keeps code clean)
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};
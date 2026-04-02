// About Component
// Simple informative section

export function About() {
  return (
    <div
      style={{
        padding: "50px 20px",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          color: "#0f172a",
        }}
      >
        About Us
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.6",
          color: "#475569",
        }}
      >
        CodeCanvas is a simple tool designed to help developers convert their
        code into visually appealing images. Whether you're sharing snippets on
        social media or teaching concepts, we make your code look stunning with
        minimal effort.
      </p>

      {/* Highlight Box */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f1f5f9",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ margin: 0 }}>
          💡 Built for developers, by developers.
        </p>
      </div>
    </div>
  );
}
import React from "react";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <h1 className="bg-red-400 text-shadow-white font-bold italic mt-8 ml-40 p-20 md:bg-sky-400">
          Design with Tailwind CSS{" "}
        </h1>
      </div>

      <button className="bg-sky-200 border-2 rounded border-b-cyan-500 p-4 m-4 ">
        Click me{" "}
      </button>
    </>
  );
}

export default App;

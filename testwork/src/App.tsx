import React from "react";
import "./style.css";

function MyComponent() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontWeight: "bold" }}>
          <span className="core-partnership">
            ㅤㅤㅤFind a carer your ㅤㅤㅤㅤㅤㅤ
          </span>
          <span className="core-discipline">family will love</span>
        </h1>

        <p style={{ fontWeight: "bold" }}></p>
        <p>ㅤㅤㅤㅤㅤㅤㅤㅤContact trusted and experienced carers near you</p>
        <input type="text" placeholder="Enter your postal code" />
      </div>
      <div style={{ flex: 1, marginRight: "40px" }}>
        <img
          src="curamcare.webp"
          alt="Curam Care"
          style={{ width: "100%", marginTop: "40px", marginRight: "40px" }}
        />
      </div>
    </div>
  );
}

{
  const MyComponent = () => console.log();
}

export default MyComponent;

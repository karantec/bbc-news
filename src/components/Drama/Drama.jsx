import React from "react";

const Drama = (props) => {
  return (
   
    <div
      style={{
        border: "1px solid #ccc", // Simple border for the card
        width: "300px",           // Fixed width for the card
        padding: "px",          // Padding inside the card
        margin: "10px",           // Space around the card
      }}
    >
      <img
        src={props.img}
        alt="Podcast"
        style={{
          width: "100%",         // Image takes full width of the card
          marginBottom: "10px",  // Space below the image
        }}
      />
      <p
        style={{
          fontSize: "16px",      // Font size for the title
          wordWrap: "break-word", // Ensure long words break to the next line
          whiteSpace: "normal",   // Ensure text wraps properly
          marginBottom: "8px",   // Space below the title
        }}
      >
        {props.title}
      </p>
      <span
        style={{
          fontSize: "14px",      // Font size for the description
        }}
      >
        {props.des}
      </span>
    </div>
  );
};

export default Drama;

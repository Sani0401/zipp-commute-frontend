import React from "react";
import "./DataCards.css";

function DataCards({ typeOfData, dataInNumber, percentage, color }) {
  // Determine the text color based on the 'color' prop
  const textColor = color === "green" ? "#006400" : "red";

  return (
    <div className="DataCards__mainContainer">
      <h4 className="DataCard__DataType">{typeOfData}</h4>
      <span className="DataCards__percentageSpan">
        <h3 className="DataCard__dataNumber">{dataInNumber} </h3>

        <p className="DataCard__countPercentage" style={{ color: textColor }}>
         ({percentage})
        </p>
      </span>
    </div>
  );
}

export default DataCards;

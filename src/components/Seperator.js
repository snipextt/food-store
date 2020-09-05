import React from "react"

function Seperator({ color = "", width = 100 }) {
  return (
    <div
      style={{
        height: "8px",
        backgroundColor: color,
        width: `${width}px`,
        borderRadius: "8px",
      }}
    ></div>
  )
}

export default Seperator

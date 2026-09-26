import React from 'react'

export const Square = (props) => {
  return (
    <button
  style={{
    width: "70px",
    height: "70px",
    border: "2px solid #333",
    backgroundColor: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    boxSizing: "border-box",
  }}
  onClick={props.onclick}
>
  {props.item}
</button>
  )
}

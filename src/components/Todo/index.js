import React from "react";
import { Button } from "../button";

export const Todo = ({ title, onDelete, onEdit }) => {
  return (
    <div
      className="todoContainer"
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        overFlow: "hidden",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid white",
          margin: "10px 0",
          color: "white",
          padding: "10px"
        }}
      >
        {title}
        <div
          className="buttonContainer"
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            title="Delete"
            style={{
              backgroundColor: "violet",
              cursor: "pointer",
              padding: "10px 20px",
              color: "white",
              border: "none",
              marginRight: "8px",
            }}
            onClick={onDelete}
          ></Button>
          <Button
            title="Edit"
            style={{
              backgroundColor: "#ff0055",
              cursor: "pointer",
              padding: "10px 20px",
              color: "white",
              border: "none",
            }}
            onClick={onEdit}
          ></Button>
        </div>
      </div>
    </div>
  );
};

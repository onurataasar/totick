import React from "react";
import { Button } from "@mui/material";

const Todo = ({ todo, index, handleTick, handleDelete }) => {
  return (
    <div className="todo mt-8 justify-between flex mx-auto">
      <span
        style={{
          float: "left",

          textDecoration: todo.isDone ? "line-through" : "",
        }}
      >
        {index + 1 + ". " + todo.title}
      </span>
      <div>
        <Button
          className="h-6 mr-auto"
          variant="contained"
          color="success"
          onClick={() => handleTick(index)}
        >
          ✓
        </Button>{" "}
        <Button
          className="h-6"
          variant="contained"
          color="error"
          onClick={() => handleDelete(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
};

export default Todo;

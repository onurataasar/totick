import React from "react";
import { FormControl, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Todo from "./Todo";
import { useEffect } from "react";

function Box() {
  let savedTitle = localStorage.getItem("title");
  let savedIsDone = localStorage.getItem("isDone");
  console.log("savedIsDone", typeof savedIsDone + " " + savedIsDone);
  console.log("savedTitle", typeof savedTitle + " " + savedTitle);

  const [todo, setTodo] = useState([
    {
      title: savedTitle ? JSON.parse(savedTitle) : null,
      isDone: savedIsDone ? JSON.parse(savedIsDone) : false,
    },
  ]);

  useEffect(() => {
    for (let i = 0; i < todo.length; i++) {
      localStorage.setItem("title", JSON.stringify(todo[i].title));
      localStorage.setItem("isDone", JSON.stringify(todo[i].isDone));
      console.log("title", todo[i].title);
      console.log("isDone", todo[i].isDone);
    }
  }, [todo]);

  const [value, setValue] = useState("");

  const addTodo = (title) => {
    const newTodo = [...todo, { title, isDone: false }];
    setTodo(newTodo);

    console.log("todo", todo);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleTick = (index) => {
    const newTodo = [...todo];
    newTodo[index].isDone
      ? (newTodo[index].isDone = false)
      : (newTodo[index].isDone = true);
    setTodo(newTodo);
  };

  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div className="border-solid rounded-xl bg-slate-700 h-auto w-96 mx-auto mt-8 pb-8 pr-8 pl-8">
      <div className="mx-auto pt-3">
        <form onSubmit={handleClick}>
          <TextField
            id="standard-basic"
            label="Add to Tick"
            variant="filled"
            size="large"
            color="primary"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            sx={{ label: { color: "gray" }, input: { color: "white" } }}
          />

          <div className="mt-4 w-52 mx-auto">
            <Button variant="contained" type="submit" fullWidth>
              TODO
            </Button>
          </div>
        </form>
      </div>
      <div className="ml-4 mt-4">
        {todo.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            handleTick={handleTick}
            handleDelete={handleDelete}
          ></Todo>
        ))}
      </div>
    </div>
  );
}

export default Box;

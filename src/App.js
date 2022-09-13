import React, { useState } from "react";
import { Button } from "./components/button";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import "./style.css";

const App = () => {
  //defining state
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editing, setediting] = useState(false);
  const [currentEditingId, setcurrenteditingid] = useState(0);

  // function for add to todo on button click
  const handleClickButton = () => {
    if (value.length > 3) {
      let newTodos = [...todos];
      newTodos.push({
        id: Math.random(),
        name: value,
      });
      setValue("");
      setTodos(newTodos);
      localStorage.setItem("localTodo", JSON.stringify(newTodos));
    } else {
      alert("please enter minimum 4 characters");
    }
  };

  // function for set every characters in input field
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // function for the button to  delete todo
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newArray);
    setediting(false);
  };

  // function for the button to  edit todo
  const editTodo = (data) => {
    setediting(true);
    setValue(data.name);
    setcurrenteditingid(data.id);
  };

  // function for the button to  save edited todo
  const handleSave = () => {
    const updatedArray = todos.map((todo) => {
      if (todo.id === currentEditingId && value.length > 3) {
        return { ...todo, name: value };
      }
      return todo;
    });
    setTodos(updatedArray);
    setcurrenteditingid(0);
    setValue("");
    setediting(false);
  };

  return (
    <div
      className="app"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1489376646075-cd00ac377106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="heading" style={{ fontSize: "66px", margin: "0" }}>
        TODO
      </h1>
      <div
        className="todo"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          backgroundColor: "black",
          overflowY: "auto",
          overflow: "hidden",
          borderRadius: "20PX",
        }}
      >
        <div
          className="textField"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
          }}
        >
          <Input
            placeholder="Type your Todos"
            value={value}
            onChange={(e) => handleInputChange(e)}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
              outline: "none",
              border: "none",
            }}
          />
          <Button
            title="Add"
            style={{
              backgroundColor: "blue",
              cursor: "pointer",
              height: "100%",
              padding: "10px 20px",
              color: "white",
              border: "none",
            }}
            onClick={handleClickButton}
          />
        </div>

        {editing ? (
          <Button
            title="save changes"
            onClick={handleSave}
            style={{
              backgroundColor: "green",
              cursor: "pointer",
              padding: "10px",
              color: "white",
            }}
          />
        ) : null}
        <div
          className="todo-list"
          style={{ height: "100%", overflowY: "scroll" }}
        >
          {todos
            .filter((data) => data.name.includes(value))
            .map((data) => (
              <Todo
                key={data.id}
                title={data.name}
                onDelete={() => deleteTodo(data.id)}
                onEdit={() => editTodo(data)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Button } from "./components/button";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
// Bootstrap for react
const App = () => {
  //defining state
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editing, setediting] = useState(false);
  const [currentEditingId, setcurrenteditingid] = useState(0);

  const handleClickButton = () => {
    if (value.length > 3) {
      let newTodos = [...todos];
      newTodos.push({
        id: Math.random(),
        name: value,
      });
      setValue("");
      setTodos(newTodos);
    } else {
      alert("please enter minimum 4 characters");
    }
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(newArray);
  };
  const editTodo = (data) => {
    setediting(true);
    setValue(data.name);
    setcurrenteditingid(data.id);
  };
  const handleSave = () => {
    const updatedArray = todos.map((todo) => {
      if (todo.id === currentEditingId && value.length > 3) {
        return { ...todo, name: value };
      } else {
        alert("please enter minimum 4 characters");
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
      style={{ height: "100vh", backgroundColor: "pink", display: "flex" }}
    >
      <div
        className="todo"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "500px",
          height: "500px",
          backgroundColor: "black",
          overflowY: "auto",
          overflow: "hidden",
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
     <div className='todo-list' style={{height:"100%",overflowY:"scroll"}}>
     {todos.map((data) => (
          <Todo
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

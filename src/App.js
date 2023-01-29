import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Todos from "./components/Todos";
import AddInput from "./components/AddInput";
import { useState } from "react";

let initTodos = [
  {
    text: "PR Matematika",
    check: false,
    priority: "Urgent&Important",
    day: "today",
  },
  {
    text: "Belajar Coding di Youtube",
    check: false,
    priority: "NotUrgent&Important",
    day: "tomorrow",
  },
];

function App() {
  const [todos, setTodos] = useState(initTodos);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      return null;
    }
    setTodos([
      ...todos,
      {
        text: value,
        check: false,
        priority: "Urgent&Important",
        day: "none",
      },
    ]);

    setValue("");
  };

  return (
    <>
      <Navbar />
      <AddInput value={value} onSubmit={handleSubmit} onChange={handleChange} />
      <Container>
        <Todos todos={todos} />
      </Container>
    </>
  );
}

export default App;

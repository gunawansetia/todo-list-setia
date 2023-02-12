import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Todos from "./components/Todos";
import AddInput from "./components/AddInput";
import { useState, createContext } from "react";
import Info from "./components/Info";
import TodosDone from "./components/TodosDone";

let initTodos = [
  {
    id: 1,
    text: "PR Matematika",
    check: false,
    priority: "Urgent&Important",
    day: "today",
  },
  {
    id: 2,
    text: "Belajar Coding di Youtube",
    check: false,
    priority: "NotUrgent&Important",
    day: "tomorrow",
  },
];

let allDoneTodos = [
  {
    id: 10,
    text: "PR Bahasa",
    check: false,
    priority: "Urgent&Important",
    day: "tomorrow",
  },
];

export const MyContext = createContext();

const initDaySelect = [
  { value: "today", text: "Today" },
  { value: "tomorrow", text: "Tomorrow" },
  { value: "none", text: "-" },
];

function App() {
  const [todos, setTodos] = useState(initTodos);
  const [doneTodos, setDoneTodos] = useState(allDoneTodos);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const updateDay = (event, id, arr) => {
    const newState = todos.map((item) => {
      if (item.id === id) {
        return { ...item, day: event.target.value };
      }
      return item;
    });
    setTodos(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      return null;
    }
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: value,
        check: false,
        priority: "Urgent&Important",
        day: "today",
      },
    ]);

    setValue("");
  };

  const jumlahTodayTask = () => {
    return todos.filter((el) => el.day.includes("today"));
  };

  const jumlahTomorrow = () => {
    return todos.filter((el) => el.day.includes("tomorrow"));
  };

  return (
    <>
      <MyContext.Provider
        value={{
          initDaySelect,
        }}
      >
        <Navbar />
        <AddInput
          value={value}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <Container>
          <Info
            totalTask={todos.length}
            todayTask={jumlahTodayTask().length}
            tomorrowTask={jumlahTomorrow().length}
          />
          <Todos todos={todos} updateDay={updateDay} />
        </Container>
        <TodosDone doneTodos={doneTodos} />
      </MyContext.Provider>
    </>
  );
}

export default App;

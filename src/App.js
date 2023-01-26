import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Todos from "./components/Todos";
import AddInput from "./components/AddInput";

function App() {
  return (
    <>
      <Navbar />;
      <Container>
        <AddInput />
        <Todos />
      </Container>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Navbar />;
      <Container>
        <Todos />
      </Container>
    </div>
  );
}

export default App;

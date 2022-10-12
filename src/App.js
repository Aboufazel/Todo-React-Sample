
import './App.css';
import TodoProvider from "./context/todoContext";
import Home from "./components/Home";

function App() {
  return (
    <TodoProvider>
      <Home/>
    </TodoProvider>
  );
}

export default App;

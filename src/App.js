
import './App.css';
import TodoProvider from "./context/todoContext";
import Router from "./router/Router";
import {RouterProvider} from "react-router";

function App() {
  return (
    <TodoProvider>
      <RouterProvider router={Router}/>
    </TodoProvider>
  );
}

export default App;

import "./App.css";
import Pagingation from "./components/Pagination/Pagination";
import TodoWrapper from "./components/Todo/TodoWrapper";
import Wrapper from "./context/Wrapper";

function App() {
  return (
    <div className="App">
      {/* <Pagingation /> */}
      {/* <Wrapper /> */}
      <TodoWrapper />
    </div>
  );
}

export default App;

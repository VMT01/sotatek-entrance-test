import { useEffect, useState } from "react";
import NewTask from "./components/NewTask";
import ToDoList from "./components/ToDoList";

function App() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => setTaskList(JSON.parse(localStorage.getItem("SotaTeK"))), []);

  return (
    <div className="App">
      <NewTask setTaskList={setTaskList} />
      <ToDoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;

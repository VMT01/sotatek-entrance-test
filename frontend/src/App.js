import { useEffect, useState } from "react";
import NewTask from "./components/NewTask";
import ToDoList from "./components/ToDoList";
import axios from "axios";

function App() {
  const [taskList, setTaskList] = useState([]);

  // For localStorage
  useEffect(() => {
    try {
      setTaskList(JSON.parse(localStorage.getItem("SotaTek")));
    } catch (err) {
      setTaskList([]);
    }
  }, []);

  // For server
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/get")
  //     .then(({ data }) => setTaskList(data))
  //     .catch((err) => setTaskList([]));
  // }, []);

  return (
    <div className="App">
      <NewTask taskList={taskList} setTaskList={setTaskList} />
      <ToDoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;

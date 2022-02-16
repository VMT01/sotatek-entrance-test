import axios from "axios";
import { useState } from "react";
import TaskInfo from "../TaskInfo";
const defaultTask = {
  taskTitle: "",
  taskDescription: "",
  dueDate: new Date().toISOString().substr(0, 10),
  priority: "Normal",
  checked: false,
};

export default function NewTask({ taskList = [], setTaskList }) {
  const [task, setTask] = useState(defaultTask);

  function handleSubmit() {
    if (task.taskTitle === "") {
      alert("Task Title is required!");
    } else {
      const tempTaskList = [...taskList, task];

      // For localStorage
      localStorage.setItem("SotaTek", JSON.stringify(tempTaskList));

      // For server
      // axios.post("http://localhost:5000/update", tempTaskList);
      
      setTaskList(tempTaskList);
      setTask(defaultTask);
    }
  }

  return (
    <div className="task">
      <h3 className="title">New Task</h3>
      <TaskInfo
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
        isCreateNew={true}
      />
    </div>
  );
}

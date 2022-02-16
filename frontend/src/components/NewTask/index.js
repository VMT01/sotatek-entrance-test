import { useState } from "react";
import TaskInfo from "../TaskInfo";
const defaultTask = {
  taskTitle: "",
  taskDescription: "",
  dueDate: new Date().toISOString().substr(0, 10),
  priority: "Normal",
  checked: false,
};

export default function NewTask({ setTaskList }) {
  const [task, setTask] = useState(defaultTask);

  function handleSubmit() {
    if (task.taskTitle === "") {
      alert("Task Title is required!");
    } else {
      setTaskList((old) => {
        const tempOld = [...old, task];
        localStorage.setItem("SotaTeK", JSON.stringify(tempOld));
        return tempOld;
      });
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

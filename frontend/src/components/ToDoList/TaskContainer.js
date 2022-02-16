import axios from "axios";
import { useEffect, useState } from "react";
import TaskInfo from "../TaskInfo";

export default function TaskContainer({ item, index, setTaskList }) {
  const [task, setTask] = useState();
  useEffect(() => setTask(item), [item]);
  const [isOpen, setIsOpen] = useState(false);

  function handleCheckBox(e) {
    setTaskList((old) => {
      const tempOld = [...old];
      tempOld[index] = { ...tempOld[index], checked: e.target.checked };

      // For localStorage
      localStorage.setItem("SotaTek", JSON.stringify(tempOld));

      // For server
      // axios.post("http://localhost:5000/update", tempOld);

      return tempOld;
    });
  }

  function handleSubmit() {
    if (task.taskTitle === "") {
      alert("Task Title is required!");
    } else {
      setTaskList((old) => {
        const tempOld = [...old];
        tempOld[index] = task;

        // For localStorage
        localStorage.setItem("SotaTek", JSON.stringify(tempOld));

        // For server
        // axios.post("http://localhost:5000/update", tempOld);
        return tempOld;
      });
    }
  }

  function handleRemove() {
    setTaskList((old) => {
      const tempOld = old.filter((_, idx) => idx !== index);

      // For localStorage
      localStorage.setItem("SotaTek", JSON.stringify(tempOld));

      // For server
      // axios.post("http://localhost:5000/update", tempOld);
      return tempOld;
    });
  }

  return (
    <div className="full-width spacing">
      <div className="todo-list__item">
        <div className="todo-list__item-center">
          <input
            type="checkbox"
            className="todo-list__checkbox"
            checked={item.checked}
            onChange={handleCheckBox}
          />
          {item.taskTitle}
        </div>
        <div>
          <button
            className="todo-list__detail-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            Detail
          </button>
          <button className="todo-list__remove-button" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="full-width todo-list__item-detail">
          <TaskInfo
            task={task}
            setTask={setTask}
            handleSubmit={handleSubmit}
            isCreateNew={false}
          />
        </div>
      )}
    </div>
  );
}

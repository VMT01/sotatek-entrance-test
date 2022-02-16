import axios from "axios";
import { useMemo, useState } from "react";
import TaskContainer from "./TaskContainer";

export default function ToDoList({ taskList = [], setTaskList }) {
  const isChecked = useMemo(
    () => taskList.some((item) => item.checked),
    [taskList]
  );
  const [filter, setFilter] = useState("");

  function removeChecked() {
    const checkedTasks = [...taskList].filter((t) => t.checked === false);

    // For localStorage
    localStorage.setItem("SotaTek", JSON.stringify(checkedTasks));

    // For server
    // axios.post("http://localhost:5000/update", checkedTasks);

    setTaskList(checkedTasks);
  }

  return (
    <div className="todo-list">
      <h3 className="title">To Do List</h3>

      {/* Task Filter */}
      <input
        className="input-bar"
        placeholder="Search ..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* Task List */}
      <div className="full-width overflow-auto max-height">
        {taskList
          .filter((t) =>
            t.taskTitle.toLowerCase().match(filter.toLowerCase().trim())
          )
          .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
          .map((item) => {
            const index = taskList.indexOf(item);
            return (
              <TaskContainer
                key={item.taskTitle}
                item={item}
                index={index}
                setTaskList={setTaskList}
              />
            );
          })}
      </div>

      {/* Bulk Box */}
      {isChecked && (
        <footer className="full-width todo-list__bulk-box">
          Bulk Action:
          <div>
            <button className="todo-list__done-button">Done</button>
            <button
              className="todo-list__remove-button"
              onClick={removeChecked}
            >
              Remove
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

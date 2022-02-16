export default function TaskInfo({ task, setTask, handleSubmit, isCreateNew }) {
  return (
    <>
      {/* Task Title */}
      <input
        className="input-bar"
        placeholder={`${
          isCreateNew ? "Add new task ..." : "Add task title ..."
        }`}
        value={task.taskTitle}
        onChange={(e) =>
          setTask((old) => ({ ...old, taskTitle: e.target.value }))
        }
        required
      />

      {/* Task Description */}
      <div className="full-width">
        <label className="task__label">Description</label>
        <textarea
          className="task__textarea"
          value={task.taskDescription}
          onChange={(e) =>
            setTask((old) => ({ ...old, taskDescription: e.target.value }))
          }
        />
      </div>

      {/* Task Info */}
      <div className="full-width display-flex">
        <div className="display-flex--col">
          <label htmlFor="dueDate" className="task__label">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            className="task__input"
            value={task.dueDate}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(e) =>
              setTask((old) => ({ ...old, dueDate: e.target.value }))
            }
          />
        </div>
        <div className="display-flex--col">
          <label htmlFor="priority" className="task__label">
            Priority
          </label>
          <select
            id="priority"
            className="task__input"
            value={task.priority}
            onChange={(e) =>
              setTask((old) => ({ ...old, priority: e.target.value }))
            }
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button className="task__button" onClick={handleSubmit}>
        {isCreateNew ? "Add" : "Update"}
      </button>
    </>
  );
}

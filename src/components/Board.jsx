import { useState } from "react";
import Modal from "react-modal";
import Task from "./Task";

// Bind modal to app element
Modal.setAppElement("#root");

const Board = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Task 1",
      content: "Write contents here",
      status: "Pending",
    },
    {
      id: 1,
      title: "Task 2",
      content: "Write contents here",
      status: "In Progress",
    },
  ]);

  const increment = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length,
        title: `Task ${prevTasks.length + 1}`,
        content: "Write contents here",
        status: "Pending",
      },
    ]);
  };

  const editTaskContent = (id, updatedContent) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, content: updatedContent } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container">
      <h2>Tasks ({tasks.length})</h2>
      <button onClick={increment}>Create Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              id={task.id}
              title={task.title}
              initialContent={task.content}
              initialStatus={task.status}
              onEdit={editTaskContent}
              onDelete={deleteTask}
              onStatusChange={updateTaskStatus}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;

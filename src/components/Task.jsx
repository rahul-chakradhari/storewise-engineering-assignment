import { useState } from "react";

const Task = ({
  id,
  title,
  initialContent,
  initialStatus,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState(initialStatus);

  const handleEdit = () => {
    const updatedContent = prompt("Edit the task content:", content);
    if (updatedContent) {
      setContent(updatedContent);
      onEdit(id, updatedContent);
    }
  };

  const handleStatusChange = () => {
    const newStatus = prompt(
      "Update task status (Pending, Complete, In Progress):",
      status
    );
    if (
      newStatus &&
      ["Pending", "Complete", "In Progress"].includes(newStatus)
    ) {
      setStatus(newStatus);
      onStatusChange(id, newStatus); // Notify parent to update if needed
    } else {
      alert(
        "Invalid status. Please use 'Pending', 'Complete', or 'In Progress'."
      );
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Status: {status}</p>
      <div className="button-container">
        <button onClick={handleEdit}>Edit Task</button>
        <button onClick={() => onDelete(id)}>Delete Task</button>
        <button onClick={handleStatusChange}>Details</button>
      </div>
    </div>
  );
};

export default Task;

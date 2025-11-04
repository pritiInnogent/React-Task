

import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onUpdate, onDelete }) {
  if (tasks.length === 0)
    return <p>No tasks yet — add one above.</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;


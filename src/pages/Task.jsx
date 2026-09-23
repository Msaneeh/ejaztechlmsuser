import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskHeader from "@/components/TaskHeader";
import TaskCard from "@/components/TaskCard";
import { tasksData } from "@/mockdata/tasksData";

const Task = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  const handleSubmit = (taskId) => navigate(`/tasks/${taskId}`);

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <TaskHeader />

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {tasksData.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            isOpen={expanded === task.id}
            onToggle={toggle}
            onSubmit={handleSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default Task;
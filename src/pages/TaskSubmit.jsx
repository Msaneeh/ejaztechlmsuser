import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { tasksData } from "@/mockdata/tasksData";
import TaskNotFound from "@/components/TaskNotFound";
import TaskInfoCard from "@/components/TaskInfoCard";
import TaskSubmissionForm from "@/components/TaskSubmissionForm";

const TaskSubmit = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = tasksData.find((t) => t.id === taskId);

  if (!task) {
    return <TaskNotFound onBack={() => navigate("/tasks")} />;
  }

  const initialValues = {
    title: task.submission?.title || "",
    description: task.submission?.description || "",
    repoLink: task.submission?.repoLink || "",
    demoLink: task.submission?.demoLink || "",
  };

  const handleSubmit = (values) => {
    // TODO: POST /api/tasks/:id/submit
    console.log("Submitting task:", task.id, values);
    setTimeout(() => navigate("/tasks"), 1200);
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Page header */}
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-muted-strong" />
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Submit Task
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Provide your submission details and links below.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        <TaskInfoCard task={task} />

        <TaskSubmissionForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/tasks")}
        />
      </div>
    </div>
  );
};

export default TaskSubmit;
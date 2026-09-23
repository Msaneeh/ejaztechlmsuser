import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tasksData } from "@/mockdata/tasksData";

const TaskSubmit = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = tasksData.find((t) => t.id === taskId);

  const [form, setForm] = useState({
    title: "",
    description: "",
    repoLink: "",
    demoLink: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Prefill if the task already has a submission
  useEffect(() => {
    if (task?.submission) {
      setForm({
        title: task.submission.title || "",
        description: task.submission.description || "",
        repoLink: task.submission.repoLink || "",
        demoLink: task.submission.demoLink || "",
      });
    }
  }, [task]);

  if (!task) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
        <span className="text-3xl">😕</span>
        <h1 className="text-lg font-semibold text-primary-text">
          Task not found
        </h1>
        <Button
          onClick={() => navigate("/tasks")}
          className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
        >
          ← Back to Tasks
        </Button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.description.trim()) newErrors.description = "Description is required";
    if (!form.repoLink.trim()) newErrors.repoLink = "Repository link is required";
    if (form.repoLink && !/^https?:\/\//i.test(form.repoLink))
      newErrors.repoLink = "Must start with http:// or https://";
    if (form.demoLink && !/^https?:\/\//i.test(form.demoLink))
      newErrors.demoLink = "Must start with http:// or https://";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: wire up real submission (POST to API)
    console.log("Submitting task:", task.id, form);

    setSubmitted(true);
    setTimeout(() => {
      navigate("/tasks");
    }, 1200);
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
            ←
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xl">📤</span>
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
        {/* Task info card */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                {task.title}
              </h2>
              <Badge
                variant="outline"
                className="rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-strong"
              >
                {task.phase} • {task.week}
              </Badge>
            </div>
            <p className="text-xs text-muted-text sm:text-sm">
              {task.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
              <span>
                📅 Due{" "}
                {new Date(task.dueDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>🏆 {task.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Submission form */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Submission Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Linear Regression with Gradient Descent"
                className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
                  errors.title ? "border-red-500/50" : "border-border-brand"
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-[11px] text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Short Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="Briefly describe what you built and any key findings..."
                className={`w-full resize-none rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
                  errors.description ? "border-red-500/50" : "border-border-brand"
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Repo Link */}
            <div>
              <label
                htmlFor="repoLink"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Repository Link *
              </label>
              <input
                id="repoLink"
                name="repoLink"
                type="url"
                value={form.repoLink}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
                className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
                  errors.repoLink ? "border-red-500/50" : "border-border-brand"
                }`}
              />
              {errors.repoLink && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.repoLink}
                </p>
              )}
            </div>

            {/* Demo Link (optional) */}
            <div>
              <label
                htmlFor="demoLink"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Live Demo Link <span className="text-muted-strong">(optional)</span>
              </label>
              <input
                id="demoLink"
                name="demoLink"
                type="url"
                value={form.demoLink}
                onChange={handleChange}
                placeholder="https://your-demo.vercel.app"
                className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
                  errors.demoLink ? "border-red-500/50" : "border-border-brand"
                }`}
              />
              {errors.demoLink && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.demoLink}
                </p>
              )}
            </div>

            {/* Submit row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-muted-text">
                * Required fields
              </span>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigate("/tasks")}
                  className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                >
                  {submitted ? "✓ Submitted" : "Submit Task"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskSubmit;
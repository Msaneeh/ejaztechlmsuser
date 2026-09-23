import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tasksData } from "@/mockdata/tasksData";

const Task = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  const statusConfig = {
    pending: {
      label: "Pending",
      emoji: "⏳",
      badge: "border-border-brand bg-surface2 text-primary-text",
    },
    submitted: {
      label: "Submitted",
      emoji: "📤",
      badge: "border-blue-500/30 bg-blue-500/15 text-blue-600",
    },
    graded: {
      label: "Graded",
      emoji: "✅",
      badge: "border-green-500/30 bg-green-500/15 text-green-600",
    },
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
            <span className="text-xl">📝</span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Tasks
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Complete weekly assignments and submit your work.
        </p>
      </div>

      {/* Scrollable list */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {tasksData.map((task) => {
          const s = statusConfig[task.status];
          const isOpen = expanded === task.id;

          return (
            <div
              key={task.id}
              className="glass-panel relative overflow-hidden rounded-[2rem] shadow-xs"
            >
              <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
              <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

              {/* Header — clickable to expand */}
              <button
                type="button"
                onClick={() => toggle(task.id)}
                className="relative z-10 flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5 cursor-pointer"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface2 text-lg">
                    {s.emoji}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                        {task.title}
                      </h2>
                      <Badge
                        variant="outline"
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${s.badge}`}
                      >
                        {s.label}
                      </Badge>
                    </div>

                    <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-muted-text">
                      <span>{task.phase}</span>
                      <span className="text-border">•</span>
                      <span>{task.week}</span>
                      <span className="text-border">•</span>
                      <span>Due {new Date(task.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}</span>
                      <span className="text-border">•</span>
                      <span>{task.xp} XP</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`shrink-0 text-muted-text transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
                  {/* Description */}
                  <p className="text-sm text-muted-text">{task.description}</p>

                  {/* Requirements */}
                  {task.requirements?.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                        Requirements
                      </p>
                      <ul className="space-y-1.5">
                        {task.requirements.map((r, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-strong"
                          >
                            <span className="mt-0.5 text-muted-text">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* If already submitted, show a summary */}
                  {task.submission && (
                    <div className="mt-4 rounded-2xl border border-border-brand bg-surface2/60 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                        Your submission
                      </p>
                      <p className="mt-1 text-sm font-medium text-primary-text">
                        {task.submission.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-text">
                        {task.submission.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3 text-[11px]">
                        {task.submission.repoLink && (
                          <a
                            href={task.submission.repoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-primary-text hover:underline"
                          >
                            🔗 Repo
                          </a>
                        )}
                        {task.submission.demoLink && (
                          <a
                            href={task.submission.demoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-primary-text hover:underline"
                          >
                            🌐 Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submit button at the bottom */}
                  <div className="mt-4 flex justify-start">
                    <Button
                      onClick={() => navigate(`/tasks/${task.id}`)}
                      className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                    >
                      {task.submission ? "View / Edit Submission" : "Submit Task"}
                      <span className="ml-1.5">→</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
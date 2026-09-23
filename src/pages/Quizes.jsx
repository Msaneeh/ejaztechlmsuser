import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { quizzesData } from "@/mockdata/quizzesData";

const Quizes = () => {
  const navigate = useNavigate();
  const [confirmQuiz, setConfirmQuiz] = useState(null);

  const statusConfig = {
    completed: {
      label: "Completed",
      emoji: "✅",
      badge: "border-green-500/30 bg-green-500/15 text-green-600",
    },
    available: {
      label: "Available",
      emoji: "📝",
      badge: "border-border-brand bg-surface2 text-primary-text",
    },
    locked: {
      label: "Locked",
      emoji: "🔒",
      badge: "border-border-brand bg-surface2 text-muted-text",
    },
  };

  const handleStart = (quiz) => {
    // TODO: persist attempt start in a store / API
    navigate(`/quizzes/${quiz.id}`);
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
            <span className="text-xl">🧠</span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Quizzes
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Take each phase quiz to test your understanding. Each quiz can be taken only once.
        </p>
      </div>

      {/* Scrollable list */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {quizzesData.map((quiz) => {
          const s = statusConfig[quiz.status];
          const isLocked = quiz.status === "locked";
          const isCompleted = quiz.status === "completed";
          const isAvailable = quiz.status === "available";

          return (
            <div
              key={quiz.id}
              className={`glass-panel relative overflow-hidden rounded-[2rem] shadow-xs ${
                isLocked ? "opacity-70" : ""
              }`}
            >
              <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
              <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

              <div className="relative z-10 flex flex-col gap-3 p-4 sm:p-5">
                {/* Header row */}
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg ${
                      isCompleted
                        ? "bg-green-500/15 text-green-600"
                        : "bg-surface2 text-muted-text"
                    }`}
                  >
                    {s.emoji}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                        {quiz.phase}
                      </h2>
                      <Badge
                        variant="outline"
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${s.badge}`}
                      >
                        {s.label}
                      </Badge>
                    </div>

                    <p className="mt-0.5 text-xs text-muted-text">
                      {quiz.description}
                    </p>

                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
                      <span>❓ {quiz.questionsCount} questions</span>
                      <span>•</span>
                      <span>⏱️ {quiz.duration}</span>
                      <span>•</span>
                      <span>🎯 Pass: {quiz.passingScore}%</span>
                      {quiz.attemptsAllowed === 1 && (
                        <>
                          <span>•</span>
                          <span className="font-medium text-muted-strong">
                            One attempt only
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Previous attempt summary */}
                {isCompleted && quiz.lastScore !== null && (
                  <div className="rounded-2xl border border-border-brand bg-surface2/60 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                      Last attempt
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-3">
                      <span
                        className={`text-sm font-semibold ${
                          quiz.lastScore >= quiz.passingScore
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {quiz.lastScore}%
                      </span>
                      <span className="text-[11px] text-muted-text">
                        {new Date(quiz.lastAttemptDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-[11px] text-muted-text">
                        • Attempt {quiz.attemptsUsed} of {quiz.attemptsAllowed}
                      </span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  {isAvailable && (
                    <Button
                      onClick={() => setConfirmQuiz(quiz)}
                      className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                    >
                      Take Phase Quiz
                      <span className="ml-1.5">→</span>
                    </Button>
                  )}

                  {isCompleted && (
                    <Button
                      disabled
                      className="btn-glass h-9 rounded-full px-4 text-xs font-medium opacity-60 cursor-not-allowed"
                    >
                      ✅ Already Attempted
                    </Button>
                  )}

                  {isLocked && (
                    <Button
                      disabled
                      className="btn-glass h-9 rounded-full px-4 text-xs font-medium opacity-60 cursor-not-allowed"
                    >
                      🔒 Complete previous phases to unlock
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Confirmation dialog */}
      <Dialog
        open={!!confirmQuiz}
        onOpenChange={(open) => !open && setConfirmQuiz(null)}
      >
        <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl text-gold">
              ⚠️
            </div>
            <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
              You can only take this quiz once
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-text">
              Once you start <span className="font-medium text-primary-text">{confirmQuiz?.phase}</span>,
              you'll have <span className="font-medium text-primary-text">{confirmQuiz?.duration}</span> to
              complete it. You won't be able to retake it.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 space-y-2 rounded-2xl border border-border-brand bg-surface2 p-3 text-xs text-muted-strong">
            <div className="flex items-center justify-between">
              <span className="text-muted-text">Questions</span>
              <span className="font-medium">{confirmQuiz?.questionsCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-text">Time limit</span>
              <span className="font-medium">{confirmQuiz?.duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-text">Passing score</span>
              <span className="font-medium">{confirmQuiz?.passingScore}%</span>
            </div>
          </div>

          <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="ghost"
              onClick={() => setConfirmQuiz(null)}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleStart(confirmQuiz);
                setConfirmQuiz(null);
              }}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
            >
              I Understand, Start Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Quizes;
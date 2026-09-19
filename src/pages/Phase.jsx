import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Layers,
  ChevronDown,
  CheckCircle2,
  PlayCircle,
  Lock,
  Clock,
  BookOpen,
  Video,
  ExternalLink,
  ClipboardList,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { phasesData, capstoneProject } from "@/mockdata/phasesData";

const Phase = () => {
  const navigate = useNavigate();
  const [evalLink, setEvalLink] = useState(null);

  const statusConfig = {
    completed: {
      label: "Completed",
      badge: "border-green-500/30 bg-green-500/15 text-green-600",
      icon: CheckCircle2,
    },
    "in-progress": {
      label: "In Progress",
      badge: "border-border-brand bg-surface2 text-primary-text",
      icon: PlayCircle,
    },
    locked: {
      label: "Locked",
      badge: "border-border-brand bg-surface2 text-muted-text",
      icon: Lock,
    },
  };

  const weekStatusConfig = {
    completed: { icon: CheckCircle2, color: "text-green-500" },
    "in-progress": { icon: PlayCircle, color: "text-primary-text" },
    locked: { icon: Lock, color: "text-muted-text" },
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
            <Layers className="h-5 w-5 text-muted-strong" />
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Course Phases
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Work through each phase, complete weekly evaluations, and take your quizzes.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="min-h-0 flex-1 overflow-y-auto pr-1 space-y-4">
        {/* Phases accordion */}
        <Accordion type="single" collapsible defaultValue="phase-2">
          {phasesData.map((phase) => {
            const s = statusConfig[phase.status];
            const StatusIcon = s.icon;

            return (
              <AccordionItem
                key={phase.id}
                value={`phase-${phase.id}`}
                className="glass-panel relative mb-4 overflow-hidden rounded-[2rem] border-none px-4 sm:px-5 shadow-xs"
              >
                <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
                <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

                <AccordionTrigger className="relative z-10 gap-3 py-4 hover:no-underline [&>svg]:hidden">
                  <div className="flex w-full items-start justify-between gap-3 text-left">
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                          {phase.name}
                        </h2>
                        <Badge
                          variant="outline"
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${s.badge}`}
                        >
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {s.label}
                        </Badge>
                      </div>

                      <p className="line-clamp-2 text-xs text-muted-text sm:text-sm">
                        {phase.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {phase.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {phase.lessonsCount} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="h-3 w-3" />
                          4 weeks
                        </span>
                      </div>

                      {phase.status !== "locked" && (
                        <div className="mt-1 flex items-center gap-2">
                          <Progress
                            value={phase.progress}
                            className="h-2 max-w-[240px] bg-surface2 [&>div]:bg-green-500 [&>div]:rounded-full"
                          />
                          <span className="text-[11px] font-medium text-muted-text">
                            {phase.progress}%
                          </span>
                        </div>
                      )}
                    </div>

                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-muted-text transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="relative z-10 pb-4">
                  <div className="space-y-2">
                    {/* Weeks */}
                    {phase.weeks.map((week) => {
                      const wc = weekStatusConfig[week.status];
                      const WeekIcon = wc.icon;
                      const isLocked = week.status === "locked";

                      return (
                        <div
                          key={week.id}
                          className={`flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 transition-colors sm:px-4 ${
                            isLocked
                              ? "opacity-60"
                              : "hover:border-border-brand hover:bg-surface2/60"
                          }`}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface2 ${wc.color}`}
                            >
                              <WeekIcon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                                  Week {week.number}
                                </span>
                              </div>
                              <p className="truncate text-sm font-medium text-primary-text">
                                {week.title}
                              </p>
                              <div className="mt-0.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
                                <span className="flex items-center gap-1">
                                  <BookOpen className="h-3 w-3" />
                                  {week.lessons} lessons
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {week.duration}
                                </span>
                              </div>
                            </div>
                          </div>

                          {!isLocked && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate(`/phase/${phase.id}/week/${week.id}`)}
                              className="btn-glass h-8 shrink-0 rounded-full px-3 text-xs font-medium"
                            >
                              {week.status === "completed" ? "Review" : "Continue"}
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      );
                    })}

                    {/* Evaluation session button — after week 2 */}
                    {phase.hasEvaluation && (
                      <div className="mt-3 flex items-center justify-between rounded-2xl border border-border-brand bg-surface2/60 px-3 py-3 sm:px-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                            <Video className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-primary-text">
                              Week 2 Evaluation Session
                            </p>
                            <p className="text-[11px] text-muted-text">
                              Live session with your mentor to review progress.
                            </p>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          disabled={phase.status === "locked"}
                          onClick={() => setEvalLink(phase.evaluationLink)}
                          className="btn-primary h-8 shrink-0 rounded-full px-3 text-xs font-medium disabled:opacity-40"
                        >
                          Join
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    )}

                    {/* Quiz button — after week 4 */}
                    {phase.quizLink && phase.status !== "locked" && (
                      <div className="mt-2 flex items-center justify-between rounded-2xl border border-green-500/30 bg-green-500/10 px-3 py-3 sm:px-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600">
                            <ClipboardList className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-primary-text">
                              Phase Quiz
                            </p>
                            <p className="text-[11px] text-muted-text">
                              Test your understanding of the full phase.
                            </p>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          onClick={() => navigate(phase.quizLink)}
                          className="btn-primary h-8 shrink-0 rounded-full bg-green-600 px-3 text-xs font-medium hover:bg-green-700"
                        >
                          Take Quiz
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Capstone project card */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                    {capstoneProject.title}
                  </h2>
                  <Badge
                    variant="outline"
                    className="rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-text"
                  >
                    <Lock className="mr-1 h-3 w-3" />
                    Locked
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-muted-text sm:text-sm">
                  {capstoneProject.description}
                </p>
                <p className="mt-1 text-[11px] text-muted-text">
                  Estimated duration: {capstoneProject.duration}
                </p>
              </div>
            </div>

            <Button
              disabled={capstoneProject.status === "locked"}
              className="btn-primary h-9 shrink-0 rounded-full px-4 text-xs font-medium sm:text-sm"
            >
              View Project
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Evaluation modal */}
      <Dialog open={!!evalLink} onOpenChange={(open) => !open && setEvalLink(null)}>
        <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Video className="h-5 w-5" />
            </div>
            <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
              Evaluation Session
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-text">
              Your mentor is waiting. Join the live session using the link below.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 rounded-2xl border border-border-brand bg-surface2 p-3">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              Meeting Link
            </p>
            <p className="truncate text-sm font-medium text-primary-text">
              {evalLink}
            </p>
          </div>

          <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="ghost"
              onClick={() => setEvalLink(null)}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>
            <a href={evalLink || "#"} target="_blank" rel="noreferrer">
              <Button className="btn-primary h-9 rounded-full px-4 text-xs font-medium">
                Join Meeting
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Phase;
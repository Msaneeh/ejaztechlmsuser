import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  CheckCircle2,
  PlayCircle,
  Lock,
  Clock,
  BookOpen,
  Layers,
  Video,
  ExternalLink,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PhaseWeekRow from "./PhaseWeekRow";
import PhaseMilestoneRow from "./PhaseMilestoneRow";

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

const PhaseAccordionItem = ({ phase, onJoinEvaluation, onOpenWeek }) => {
  const navigate = useNavigate();
  const s = statusConfig[phase.status] || statusConfig.locked;
  const StatusIcon = s.icon;

  return (
    <AccordionItem
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
          {phase.weeks.map((week) => (
            <PhaseWeekRow
              key={week.id}
              week={week}
              onClick={() => onOpenWeek(week, phase.name)
              }
            />
          ))}

          {phase.hasEvaluation && (
            <PhaseMilestoneRow
              icon={Video}
              accent="gold"
              title="Week 2 Evaluation Session"
              subtitle="Live session with your mentor to review progress."
              actionLabel="Join"
              actionIcon={ExternalLink}
              disabled={phase.status === "locked"}
              onAction={() => onJoinEvaluation(phase.evaluationLink)}
            />
          )}

          {phase.quizLink && phase.status !== "locked" && (
            <PhaseMilestoneRow
              icon={ClipboardList}
              accent="green"
              title="Phase Quiz"
              subtitle="Test your understanding of the full phase."
              actionLabel="Take Quiz"
              actionIcon={ArrowRight}
              onAction={() => navigate(phase.quizLink)}
            />
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PhaseAccordionItem;
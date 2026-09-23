import { Link as LinkIcon, Globe } from "lucide-react";

const TaskSubmissionSummary = ({ submission }) => {
  if (!submission) return null;

  return (
    <div className="mt-4 rounded-2xl border border-border-brand bg-surface2/60 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
        Your submission
      </p>
      <p className="mt-1 text-sm font-medium text-primary-text">
        {submission.title}
      </p>
      <p className="mt-0.5 text-xs text-muted-text">
        {submission.description}
      </p>

      <div className="mt-2 flex flex-wrap gap-3 text-[11px]">
        {submission.repoLink && (
          <a
            href={submission.repoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary-text hover:underline"
          >
            <LinkIcon className="h-3 w-3" />
            Repo
          </a>
        )}
        {submission.demoLink && (
          <a
            href={submission.demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary-text hover:underline"
          >
            <Globe className="h-3 w-3" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default TaskSubmissionSummary;
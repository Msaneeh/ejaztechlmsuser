import { useNavigate } from "react-router-dom";
import { ArrowLeft, SquareCheckBig } from "lucide-react";

const TaskHeader = () => {
  const navigate = useNavigate();

  return (
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
          <SquareCheckBig className="h-5 w-5 text-muted-strong" />
          <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
            Tasks
          </h1>
        </div>
      </div>
      <p className="mt-1 ml-12 text-sm text-muted-text">
        Complete weekly assignments and submit your work.
      </p>
    </div>
  );
};

export default TaskHeader;
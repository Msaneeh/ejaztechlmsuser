import { Button } from "@/components/ui/button";
import { FileX2 } from "lucide-react";

const TaskNotFound = ({ onBack }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface2 text-muted-text">
        <FileX2 className="h-7 w-7" />
      </div>
      <h1 className="text-lg font-semibold text-primary-text">
        Task not found
      </h1>
      <p className="text-sm text-muted-text">
        The task you're looking for doesn't exist or was removed.
      </p>
      <Button
        onClick={onBack}
        className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
      >
        ← Back to Tasks
      </Button>
    </div>
  );
};

export default TaskNotFound;
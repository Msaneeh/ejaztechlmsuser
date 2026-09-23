import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuizNotFound = ({ onBack }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface2 text-muted-text">
        <FileQuestion />
      </div>
      <h1 className="text-lg font-semibold text-primary-text">
        Quiz not available
      </h1>
      <p className="text-sm text-muted-text">
        This quiz doesn't exist or has no questions.
      </p>
      <Button
        onClick={onBack}
        className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
      >
        ← Back to Quizzes
      </Button>
    </div>
  );
};

export default QuizNotFound;
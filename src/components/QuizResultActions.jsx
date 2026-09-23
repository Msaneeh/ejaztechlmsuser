import { Button } from "@/components/ui/button";

const QuizResultActions = ({ onBackToQuizzes, onGoToDashboard }) => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <Button
        onClick={onBackToQuizzes}
        className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
      >
        Back to Quizzes
      </Button>
      <Button
        onClick={onGoToDashboard}
        className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
      >
        Go to Dashboard
      </Button>
    </div>
  );
};

export default QuizResultActions;
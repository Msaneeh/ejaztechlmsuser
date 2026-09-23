import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const QuizStartConfirmModal = ({ open, quiz, onCancel, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onCancel()}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            You can only take this quiz once
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            Once you start{" "}
            <span className="font-medium text-primary-text">
              {quiz?.phase}
            </span>
            , you'll have{" "}
            <span className="font-medium text-primary-text">
              {quiz?.duration}
            </span>{" "}
            to complete it. You won't be able to retake it.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-2 rounded-2xl border border-border-brand bg-surface2 p-3 text-xs text-muted-strong">
          <div className="flex items-center justify-between">
            <span className="text-muted-text">Questions</span>
            <span className="font-medium">{quiz?.questionsCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-text">Time limit</span>
            <span className="font-medium">{quiz?.duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-text">Passing score</span>
            <span className="font-medium">{quiz?.passingScore}%</span>
          </div>
        </div>

        <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            variant="ghost"
            onClick={onCancel}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
          >
            I Understand, Start Quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuizStartConfirmModal;
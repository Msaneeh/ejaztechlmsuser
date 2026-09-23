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

const QuizSubmitConfirm = ({
  open,
  answeredCount,
  total,
  onCancel,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onCancel()}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            Submit your quiz?
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            You've answered {answeredCount} of {total} questions. Once
            submitted, you can't change your answers.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            variant="ghost"
            onClick={onCancel}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            Keep Reviewing
          </Button>
          <Button
            onClick={onConfirm}
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
          >
            Yes, Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuizSubmitConfirm;
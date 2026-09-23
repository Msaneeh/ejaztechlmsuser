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

const DeleteAccountModal = ({
  open,
  input,
  setInput,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-red-500/30">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-500">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            Delete your account?
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            This action is permanent and cannot be undone. All your progress,
            certificates, and submissions will be deleted.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-text">
            Type <span className="text-red-500">DELETE</span> to confirm
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="DELETE"
            className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-red-500/50"
          />
        </div>

        <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            variant="ghost"
            onClick={onClose}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={input !== "DELETE"}
            className="h-9 rounded-full bg-red-500 px-4 text-xs font-medium text-white hover:bg-red-600 disabled:opacity-40"
          >
            Permanently Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountModal;
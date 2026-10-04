import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DoorClosed } from "lucide-react";

const LogoutDialog = ({ open, onOpenChange, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-xl">
            <DoorClosed />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            Log out?
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            You'll need to sign in again to access your dashboard.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="h-9 rounded-full bg-red-500 px-4 text-xs font-medium text-white hover:bg-red-600"
          >
            Yes, Log Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
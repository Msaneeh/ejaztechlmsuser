import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import SettingsField from "./ui/SettingsField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ChangePasswordModal = ({ open, onClose, form, setForm, onSubmit }) => {
  const hasMismatch =
    form.next && form.confirm && form.next !== form.confirm;
  const canSubmit = form.current && form.next && !hasMismatch;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
            <KeyRound className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            Change Password
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            Enter your current password and choose a new one.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-3">
          <SettingsField label="Current Password">
            <input
              type="password"
              value={form.current}
              onChange={(e) =>
                setForm((p) => ({ ...p, current: e.target.value }))
              }
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
            />
          </SettingsField>
          <SettingsField label="New Password">
            <input
              type="password"
              value={form.next}
              onChange={(e) =>
                setForm((p) => ({ ...p, next: e.target.value }))
              }
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
            />
          </SettingsField>
          <SettingsField label="Confirm New Password">
            <input
              type="password"
              value={form.confirm}
              onChange={(e) =>
                setForm((p) => ({ ...p, confirm: e.target.value }))
              }
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
            />
            {hasMismatch && (
              <p className="mt-1 text-[11px] text-red-500">
                Passwords do not match
              </p>
            )}
          </SettingsField>
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
            onClick={onSubmit}
            disabled={!canSubmit}
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
          >
            Update Password
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
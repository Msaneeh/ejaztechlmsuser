import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DangerZone = ({ onDeleteClick }) => (
  <div className="glass-panel relative shrink-0 overflow-hidden rounded-[2rem] border border-red-500/20 p-4 shadow-xs sm:p-5">
    <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-red-500/10 blur-[50px]" />

    <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-semibold tracking-tight text-red-500">
          <AlertTriangle className="h-4 w-4" />
          Danger Zone
        </h3>
        <p className="text-[11px] text-muted-text">
          Permanently delete your account and all associated data.
        </p>
      </div>
      <Button
        onClick={onDeleteClick}
        className="h-9 shrink-0 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-500/20"
      >
        Delete Account
      </Button>
    </div>
  </div>
);

export default DangerZone;
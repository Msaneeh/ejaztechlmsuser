import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const DangerZone = ({ onLogOut, onOpenSettings }) => {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-primary-text">
            Account Actions
          </h3>
          <p className="text-[11px] text-muted-text">
            Sign out of your account or manage advanced settings.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={onOpenSettings}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            <Settings /> Settings
          </Button>
          <Button
            onClick={onLogOut}
            className="h-9 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-500/20"
          >
            <LogOut /> Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DangerZone;
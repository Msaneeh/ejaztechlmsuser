import { ArrowLeft, Settings as SettingsIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SettingsHeader = ({ saved, onBack }) => (
  <div className="shrink-0">
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onBack}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
        aria-label="Go back"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-2">
        <SettingsIcon className="h-5 w-5 text-muted-strong" />
        <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
          Settings
        </h1>
        {saved && (
          <Badge
            variant="outline"
            className="rounded-full border-green-500/30 bg-green-500/15 px-2.5 py-0.5 text-[10px] font-medium text-green-600"
          >
            ✓ Saved
          </Badge>
        )}
      </div>
    </div>
    <p className="mt-1 ml-12 text-sm text-muted-text">
      Manage your account, learning preferences, and privacy.
    </p>
  </div>
);

export default SettingsHeader;
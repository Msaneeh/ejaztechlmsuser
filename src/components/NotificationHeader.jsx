import { ArrowLeft, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NotificationHeader = ({ unreadCount = 0, onBack }) => {
  return (
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
          <Bell className="h-5 w-5 text-muted-strong" />
          <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
            Notifications
          </h1>
          {unreadCount > 0 && (
            <Badge className="ml-1 rounded-full border-none bg-gold px-2 py-0.5 text-[10px] font-bold text-white">
              {unreadCount} new
            </Badge>
          )}
        </div>
      </div>
      <p className="mt-1 ml-12 text-sm text-muted-text">
        Stay up to date with your learning progress.
      </p>
    </div>
  );
};

export default NotificationHeader;
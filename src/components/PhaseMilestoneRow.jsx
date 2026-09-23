import { Button } from "@/components/ui/button";

const accentMap = {
  gold: {
    circle: "bg-gold/15 text-gold",
    button: "btn-primary",
  },
  green: {
    circle: "bg-green-500/20 text-green-600",
    button: "btn-primary bg-green-600 hover:bg-green-700",
  },
};

const PhaseMilestoneRow = ({
  icon: Icon,
  accent = "gold",
  title,
  subtitle,
  actionLabel,
  actionIcon: ActionIcon,
  onAction,
  disabled = false,
}) => {
  const styles = accentMap[accent] || accentMap.gold;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-border-brand bg-surface2/60 px-3 py-3 sm:px-4">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${styles.circle}`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-primary-text">{title}</p>
          {subtitle && (
            <p className="text-[11px] text-muted-text">{subtitle}</p>
          )}
        </div>
      </div>

      <Button
        size="sm"
        disabled={disabled}
        onClick={onAction}
        className={`${styles.button} h-8 shrink-0 rounded-full px-3 text-xs font-medium disabled:opacity-40`}
      >
        {actionLabel}
        {ActionIcon && <ActionIcon className="ml-1 h-3 w-3" />}
      </Button>
    </div>
  );
};

export default PhaseMilestoneRow;
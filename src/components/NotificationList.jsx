import NotificationItem from "./NotificationItem";
import EmptyStateNotification from "./EmptyStateNotification";

const NotificationList = ({
  notifications = [],
  filter = "all",
  onMarkRead,
  onDelete,
  onActionClick,
}) => {
  return (
    <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-3 sm:p-4 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      {notifications.length === 0 ? (
        <EmptyStateNotification filter={filter} />
      ) : (
        <div className="relative z-10 -mr-2 min-h-0 flex-1 space-y-2 overflow-y-auto pr-2">
          {notifications.map((n) => (
            <NotificationItem
              key={n.id}
              notification={n}
              onMarkRead={onMarkRead}
              onDelete={onDelete}
              onActionClick={onActionClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationList;
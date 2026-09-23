import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { notificationsData as initialData } from "@/mockdata/notificationsData";
import NotificationHeader from "@/components/NotificationHeader";
import NotificationToolbar from "@/components/NotificationToolbar";
import NotificationList from "@/components/NotificationList";


const Notification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialData);
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: "All" },
    { key: "unread", label: "Unread" },
    { key: "read", label: "Read" },
  ];

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  const filtered = useMemo(() => {
    if (filter === "unread") return notifications.filter((n) => !n.read);
    if (filter === "read") return notifications.filter((n) => n.read);
    return notifications;
  }, [notifications, filter]);

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markOneRead = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const removeOne = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const clearAll = () => setNotifications([]);

  return (
    <TooltipProvider delayDuration={200}>
  <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
    <NotificationHeader
      unreadCount={unreadCount}
      onBack={() => navigate(-1)}
    />

    <NotificationToolbar
      filter={filter}
      onFilterChange={setFilter}
      unreadCount={unreadCount}
      onMarkAllRead={markAllRead}
      onClearAll={clearAll}
    />

    <NotificationList
      notifications={filtered}
      filter={filter}
      onMarkRead={markOneRead}
      onDelete={removeOne}
      onActionClick={(href) => navigate(href)}
    />
  </div>
</TooltipProvider>
  );
};

export default Notification;
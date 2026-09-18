import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  BellOff,
  Check,
  CheckCheck,
  Trash2,
  Trophy,
  BookOpen,
  TrendingUp,
  HelpCircle,
  Info,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { notificationsData as initialData } from "@/mockdata/notificationsData";

const Notification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialData);
  const [filter, setFilter] = useState("all"); // "all" | "unread" | "read"

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

  // Icon + accent per notification type
  const typeConfig = {
    achievement: {
      icon: Trophy,
      accent: "bg-gold/15 text-gold",
      badge: "Achievement",
    },
    course: {
      icon: BookOpen,
      accent: "bg-primary-text/10 text-primary-text",
      badge: "Course",
    },
    leaderboard: {
      icon: TrendingUp,
      accent: "bg-green-500/15 text-green-500",
      badge: "Leaderboard",
    },
    quiz: {
      icon: HelpCircle,
      accent: "bg-accent-dim text-muted-strong",
      badge: "Quiz",
    },
    system: {
      icon: Info,
      accent: "bg-surface2 text-muted-text",
      badge: "System",
    },
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
        {/* Page header */}
        <div className="shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
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

        {/* Toolbar — filters + actions */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="rounded-full border border-border-brand bg-surface2 p-1">
              {filters.map((f) => (
                <TabsTrigger
                  key={f.key}
                  value={f.key}
                  className="rounded-full px-3.5 py-1.5 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                >
                  {f.label}
                  {f.key === "unread" && unreadCount > 0 && (
                    <span className="ml-1.5 rounded-full bg-gold px-1.5 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllRead}
                  disabled={unreadCount === 0}
                  className="btn-glass h-8 rounded-full px-3 text-xs font-medium disabled:opacity-40"
                >
                  <CheckCheck className="h-3.5 w-3.5" />
                  Mark all read
                </Button>
              </TooltipTrigger>
              <TooltipContent>Mark all as read</TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="btn-glass h-8 w-8 rounded-full"
                  aria-label="More options"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={clearAll}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear all
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Notification list — scrollable */}
        <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-3 sm:p-4 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          {filtered.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            <div className="relative z-10 -mr-2 min-h-0 flex-1 space-y-2 overflow-y-auto pr-2">
              {filtered.map((n) => {
                const config = typeConfig[n.type] || typeConfig.system;
                const Icon = config.icon;

                return (
                  <div
                    key={n.id}
                    className={`group relative flex items-start gap-3 rounded-2xl border p-3 transition-colors sm:p-4 ${
                      n.read
                        ? "border-transparent bg-transparent hover:bg-surface2/60"
                        : "border-border-brand bg-surface2"
                    }`}
                  >
                    {/* Type icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.accent}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold tracking-tight text-primary-text">
                          {n.title}
                        </span>
                        {!n.read && (
                          <span
                            className="h-2 w-2 shrink-0 rounded-full bg-gold"
                            aria-label="Unread"
                          />
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-text">
                        {n.message}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
                        <span>{n.time}</span>
                        {n.action && (
                          <>
                            <span className="text-border">•</span>
                            <button
                              onClick={() => navigate(n.action.href)}
                              className="inline-flex items-center gap-0.5 font-medium text-primary-text hover:underline"
                            >
                              {n.action.label}
                              <ChevronRight className="h-3 w-3" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Row actions */}
                    <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                      {!n.read && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => markOneRead(n.id)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-text transition-colors hover:bg-surface2 hover:text-primary-text"
                              aria-label="Mark as read"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>Mark as read</TooltipContent>
                        </Tooltip>
                      )}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => removeOne(n.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-text transition-colors hover:bg-destructive/10 hover:text-destructive"
                            aria-label="Delete notification"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

// Empty state shown when the filter produces no results
const EmptyState = ({ filter }) => {
  const messages = {
    all: "You're all caught up!",
    unread: "No unread notifications.",
    read: "No read notifications yet.",
  };

  return (
    <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-3 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface2">
        <BellOff className="h-7 w-7 text-muted-text" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-primary-text">
          {messages[filter] || "Nothing here"}
        </span>
        <span className="text-xs text-muted-text">
          New notifications will appear here.
        </span>
      </div>
    </div>
  );
};

export default Notification;
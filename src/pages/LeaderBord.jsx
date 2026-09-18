import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Flame, TrendingUp, Crown, Medal, ArrowLeft } from "lucide-react";
import { leaderboardData, currentUser } from "@/mockdata/leaderboardData";

const LeaderBord = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // "all" | "week" | "month"

  const filters = [
    { key: "all", label: "All Time" },
    { key: "week", label: "This Week" },
    { key: "month", label: "This Month" },
  ];

  // Placeholder podium order: 2nd, 1st, 3rd (visual arrangement)
  const podium = [leaderboardData[1], leaderboardData[0], leaderboardData[2]];
  const listRest = leaderboardData.slice(3); // rank 4 onwards

  return (
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
            <Trophy className="h-5 w-5 text-muted-strong" />
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Leaderboard
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          See how you stack up against {currentUser.totalUsers} learners.
        </p>
      </div>

      {/* Your rank hero card */}
      <div className="glass-panel relative w-full overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs shrink-0">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: avatar + rank + name */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-text text-bg text-lg font-bold">
              {currentUser.name.charAt(0)}
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-bg bg-gold text-[10px] font-bold text-white">
                #{currentUser.rank}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-primary-text">
                {currentUser.name}
              </span>
              <span className="text-xs text-muted-text">
                {currentUser.xp.toLocaleString()} XP • {currentUser.streak} day streak
              </span>
            </div>
          </div>

          {/* Right: next rank progress */}
          <div className="flex flex-col gap-1.5 sm:items-end">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-text">
              <TrendingUp className="h-3.5 w-3.5 text-green-500" />
              <span>
                <span className="font-semibold text-primary-text">
                  {currentUser.xpToNextRank} XP
                </span>{" "}
                to rank up
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface2 sm:w-40">
              <div
                className="h-full rounded-full bg-green-500"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex shrink-0 items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              filter === f.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface2 text-muted-text hover:bg-surface2/70 hover:text-primary-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Podium (top 3) */}
      <div className="glass-panel relative w-full overflow-hidden rounded-[2rem] p-4 sm:p-6 shadow-xs shrink-0">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-6">
          {podium.map((entry) => {
            const isFirst = entry.rank === 1;
            const isSecond = entry.rank === 2;
            const isThird = entry.rank === 3;

            const medalColor = isFirst
              ? "bg-gold text-white"
              : isSecond
              ? "bg-primary-text text-bg"
              : "bg-muted-strong text-bg";

            const MedalIcon = isFirst ? Crown : Medal;

            return (
              <div
                key={entry.id}
                className={`flex flex-col items-center gap-2 ${
                  isFirst ? "order-2" : isSecond ? "order-1" : "order-3"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`relative flex items-center justify-center rounded-full bg-primary-text text-bg font-bold ${
                    isFirst
                      ? "h-16 w-16 text-xl"
                      : "h-12 w-12 text-base"
                  }`}
                >
                  {entry.name.charAt(0)}
                  <span
                    className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg text-[9px] font-bold ${medalColor}`}
                  >
                    {entry.rank}
                  </span>
                </div>

                {/* Name */}
                <div className="flex flex-col items-center">
                  <span
                    className={`truncate text-center font-semibold text-primary-text ${
                      isFirst ? "text-sm" : "text-xs"
                    } max-w-[80px]`}
                  >
                    {entry.name.split(" ")[0]}
                  </span>
                  <span className="text-[10px] font-medium text-muted-text">
                    {entry.xp.toLocaleString()} XP
                  </span>
                </div>

                {/* Pedestal */}
                <div
                  className={`flex items-center justify-center rounded-t-xl ${medalColor} ${
                    isFirst
                      ? "h-20 w-16 sm:w-20"
                      : isSecond
                      ? "h-14 w-14 sm:w-16"
                      : "h-10 w-14 sm:w-16"
                  }`}
                >
                  <MedalIcon
                    className={`${
                      isFirst ? "h-5 w-5" : "h-4 w-4"
                    } opacity-90`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full list — scrollable */}
      <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        {/* Header row */}
        <div className="relative z-10 mb-2 flex shrink-0 items-center justify-between px-3 pb-2 border-b border-border-brand">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-text">
            Rank
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-text">
            XP
          </span>
        </div>

        {/* Scrollable rows */}
        <div className="relative z-10 -mr-2 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-2">
          {listRest.map((entry) => (
            <div
              key={entry.id}
              className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
                entry.isUser
                  ? "bg-surface2 border border-border-brand"
                  : "hover:bg-surface2/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                    entry.rank <= 3
                      ? "bg-gold text-white"
                      : "bg-surface2 text-muted-text"
                  }`}
                >
                  {entry.rank}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-text">
                    {entry.name}
                    {entry.isUser && (
                      <span className="ml-2 text-[10px] font-normal text-muted-text">
                        (you)
                      </span>
                    )}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-text">
                    <Flame className="h-3 w-3" />
                    {entry.streak} day streak
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-muted-strong">
                {entry.xp.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBord;
const LastAttemptSummary = ({
  lastScore,
  passingScore,
  lastAttemptDate,
  attemptsUsed,
  attemptsAllowed,
}) => {
  const passed = lastScore >= passingScore;

  return (
    <div className="rounded-2xl border border-border-brand bg-surface2/60 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
        Last attempt
      </p>
      <div className="mt-1 flex flex-wrap items-center gap-3">
        <span
          className={`text-sm font-semibold ${
            passed ? "text-green-600" : "text-red-500"
          }`}
        >
          {lastScore}%
        </span>
        <span className="text-[11px] text-muted-text">
          {new Date(lastAttemptDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="text-[11px] text-muted-text">
          • Attempt {attemptsUsed} of {attemptsAllowed}
        </span>
      </div>
    </div>
  );
};

export default LastAttemptSummary;
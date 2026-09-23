const QuizOption = ({ index, label, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all sm:p-4 ${
        isSelected
          ? "border-primary-text bg-surface2 shadow-xs"
          : "border-border-brand bg-transparent hover:border-primary-text/40 hover:bg-surface2/60"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          isSelected
            ? "bg-primary-text text-bg"
            : "bg-surface2 text-muted-text"
        }`}
      >
        {String.fromCharCode(65 + index)}
      </span>
      <span className="min-w-0 flex-1 text-sm text-primary-text">
        {label}
      </span>
    </button>
  );
};

export default QuizOption;
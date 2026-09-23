const SettingsToggle = ({ label, description, checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className="flex w-full items-center justify-between gap-3 rounded-2xl border border-border-brand bg-surface2/60 p-3 text-left transition-colors hover:bg-surface2"
  >
    <div className="min-w-0">
      <p className="text-sm font-medium text-primary-text">{label}</p>
      {description && (
        <p className="text-[11px] text-muted-text">{description}</p>
      )}
    </div>
    <span
      className={`relative flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-primary-text" : "bg-border-brand"
      }`}
    >
      <span
        className={`absolute h-4 w-4 rounded-full bg-bg shadow-sm transition-transform ${
          checked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </span>
  </button>
);

export default SettingsToggle;
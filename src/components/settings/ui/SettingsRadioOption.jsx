const SettingsRadioOption = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
      selected
        ? "border-primary-text bg-surface2"
        : "border-border-brand bg-surface2/60 hover:border-primary-text/40"
    }`}
  >
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
        selected ? "border-primary-text" : "border-border-brand"
      }`}
    >
      {selected && <span className="h-2 w-2 rounded-full bg-primary-text" />}
    </span>
    <span className="text-sm text-primary-text">{label}</span>
  </button>
);

export default SettingsRadioOption;
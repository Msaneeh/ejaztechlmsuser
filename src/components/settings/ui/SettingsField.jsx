const SettingsField = ({ label, children }) => (
  <div>
    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-text">
      {label}
    </label>
    {children}
  </div>
);

export default SettingsField;
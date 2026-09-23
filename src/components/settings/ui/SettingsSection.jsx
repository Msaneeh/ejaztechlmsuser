const SettingsSection = ({ title, description, children }) => (
  <div className="rounded-2xl border border-border-brand bg-surface2/40 p-4">
    <h3 className="text-sm font-semibold tracking-tight text-primary-text">
      {title}
    </h3>
    {description && (
      <p className="mt-0.5 text-[11px] text-muted-text">{description}</p>
    )}
    <div className="mt-3">{children}</div>
  </div>
);

export default SettingsSection;
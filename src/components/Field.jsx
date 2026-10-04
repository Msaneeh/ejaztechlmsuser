const Field = ({ label, name, value, editing, onChange, type = "text" }) => (
  <div>
    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-text">
      {label}
    </label>
    {editing ? (
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none transition-colors focus:border-border"
      />
    ) : (
      <p className="rounded-xl border border-transparent px-3 py-2 text-sm text-primary-text">
        {value || "—"}
      </p>
    )}
  </div>
);

export default Field;
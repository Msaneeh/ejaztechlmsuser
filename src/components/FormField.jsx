const FormField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  rows = 4,
  optional = false,
}) => {
  const sharedClass = `w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
    error ? "border-red-500/50" : "border-border-brand"
  }`;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
      >
        {label} {!optional && "*"}
        {optional && (
          <span className="text-muted-strong">(optional)</span>
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${sharedClass} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={sharedClass}
        />
      )}

      {error && (
        <p className="mt-1 text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormField;
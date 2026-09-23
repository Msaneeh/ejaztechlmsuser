const TaskRequirements = ({ requirements = [] }) => {
  if (requirements.length === 0) return null;

  return (
    <div className="mt-4">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
        Requirements
      </p>
      <ul className="space-y-1.5">
        {requirements.map((r, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs text-muted-strong"
          >
            <span className="mt-0.5 text-muted-text">•</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskRequirements;
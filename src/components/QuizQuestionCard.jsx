import QuizOption from "./QuizOption";

const QuizQuestionCard = ({
  question,
  questionNumber,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-4 sm:p-6 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {/* Question text */}
        <div className="mb-4 shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
            Question {questionNumber}
          </p>
          <h2 className="mt-1 text-base font-semibold leading-snug text-primary-text sm:text-lg">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
          {question.options.map((opt, i) => (
            <QuizOption
              key={i}
              index={i}
              label={opt}
              isSelected={selectedIndex === i}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionCard;
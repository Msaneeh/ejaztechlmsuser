import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { quizzesData } from "@/mockdata/quizzesData";
import QuizNotFound from "@/components/QuizNotFound";
import QuizHeader from "@/components/QuizHeader";
import QuizQuestionCard from "@/components/QuizQuestionCard";
import QuizFooterNav from "@/components/QuizFooterNav";
import QuizSubmitConfirm from "@/components/QuizSubmitConfirm";

const QuizTake = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const quiz = useMemo(
    () => quizzesData.find((q) => q.id === quizId),
    [quizId]
  );

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: optionIndex }
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  if (!quiz || quiz.questions.length === 0) {
    return <QuizNotFound onBack={() => navigate("/quizzes")} />;
  }

  const total = quiz.questions.length;
  const question = quiz.questions[current];
  const selected = answers[question.id];
  const answeredCount = Object.keys(answers).length;

  const selectOption = (index) => {
    setAnswers((prev) => ({ ...prev, [question.id]: index }));
  };

  const goNext = () => {
    if (current < total - 1) setCurrent((c) => c + 1);
  };

  const goPrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const submitQuiz = () => {
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) correct += 1;
    });
    const score = Math.round((correct / total) * 100);

    // TODO: POST submission to API
    console.log("Quiz submitted:", {
      quizId: quiz.id,
      score,
      correct,
      total,
      answers,
    });

    setShowConfirmSubmit(false);
    navigate(`/quizzes/${quiz.id}/result`, {
      state: { score, correct, total, answers, quiz },
    });
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <QuizHeader
        phaseName={quiz.phase}
        currentIndex={current}
        total={total}
        onExit={() => navigate("/quizzes")}
      />

      <QuizQuestionCard
        question={question}
        questionNumber={current + 1}
        selectedIndex={selected}
        onSelect={selectOption}
      />

      <QuizFooterNav
        currentIndex={current}
        total={total}
        answeredCount={answeredCount}
        onPrev={goPrev}
        onNext={goNext}
        onSubmitClick={() => setShowConfirmSubmit(true)}
      />

      <QuizSubmitConfirm
        open={showConfirmSubmit}
        answeredCount={answeredCount}
        total={total}
        onCancel={() => setShowConfirmSubmit(false)}
        onConfirm={submitQuiz}
      />
    </div>
  );
};

export default QuizTake;
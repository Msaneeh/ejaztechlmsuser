import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuizResultHeader from "@/components/QuizResultHeader";
import QuizScoreHero from "@/components/QuizScoreHero";
import QuizAnswerReview from "@/components/QuizAnswerReview";
import QuizResultActions from "@/components/QuizResultActions";

const QuizResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Fallback if user navigates here directly without state
  const score = state?.score ?? 0;
  const correct = state?.correct ?? 0;
  const total = state?.total ?? 0;
  const quiz = state?.quiz;
  const answers = state?.answers ?? {};

  const passingScore = quiz?.passingScore ?? 60;
  const passed = score >= passingScore;

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <QuizResultHeader onBack={() => navigate("/quizzes")} />

      <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-6 shadow-xs">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center text-center">
          <QuizScoreHero
            score={score}
            correct={correct}
            total={total}
            passed={passed}
            passingScore={passingScore}
          />

          <QuizAnswerReview
            questions={quiz?.questions}
            answers={answers}
          />

          <QuizResultActions
            onBackToQuizzes={() => navigate("/quizzes")}
            onGoToDashboard={() => navigate("/dashbord")}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
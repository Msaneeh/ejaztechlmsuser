import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "@/components/QuizzesHeader";
import QuizCard from "@/components/QuizCard";
import QuizStartConfirmModal from "@/components/QuizStartConfirmModal";
import { quizzesData } from "@/mockdata/quizzesData";

const Quizes = () => {
  const navigate = useNavigate();
  const [confirmQuiz, setConfirmQuiz] = useState(null);

  const handleStart = (quiz) => {
    // TODO: persist attempt start in a store / API
    navigate(`/quizzes/${quiz.id}`);
  };

  const handleConfirm = () => {
    handleStart(confirmQuiz);
    setConfirmQuiz(null);
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <QuizHeader />

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {quizzesData.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            onStartClick={setConfirmQuiz}
          />
        ))}
      </div>

      <QuizStartConfirmModal
        open={!!confirmQuiz}
        quiz={confirmQuiz}
        onCancel={() => setConfirmQuiz(null)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Quizes;
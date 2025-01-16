import { createSlice } from "@reduxjs/toolkit";

const quiz = [
  {
    id: 1,
    category: "Pemula",
    subCategory: [
      {
        id: 1,
        name: "keimanan",
        level: 1,
        questions: [
          {
            id: 1,
            question: "Apa kitab suci umat Islam?",
            user_answer: null,
            correct_answer_id: 3,
            answers: [
              { id: 1, answer: "Kitab Suci" },
              { id: 2, answer: "Buku Agama" },
              { id: 3, answer: "Al-Qur'an" },
              { id: 4, answer: "Dokumen Sejarah" },
            ],
          },
          // Tambahkan pertanyaan lainnya...
        ],
      },
    ],
  },
];

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: quiz,
    currentQuizIndex: 0,
    currentQuestionIndex: 0,
    showResult: false,
    score: 0,
    totalQuestions: 0,
    progress: 0,
    startTime: null,
    endTime: null,
    userAnswers: [], // Menyimpan jawaban user
  },
  reducers: {
    setCurrentQuizIndex: (state, action) => {
      state.currentQuizIndex = action.payload;
    },
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    setShowResult: (state, action) => {
      state.showResult = action.payload;
    },
    startQuiz: (state) => {
      state.startTime = new Date().toISOString();
      state.score = 0;
      state.progress = 0;
      state.userAnswers = [];
      state.endTime = null;
    },
    endQuiz: (state) => {
      state.endTime = new Date().toISOString();
      state.showResult = true;
    },
    updateAnswer: (state, action) => {
      const { quizId, questionId, answerId } = action.payload;
      const quiz = state.quizzes.find((q) => q.id === quizId);
      if (quiz) {
        const question = quiz.subCategory[0].questions.find(
          (q) => q.id === questionId
        );
        if (question) {
          question.user_answer = answerId;

          // Simpan jawaban user
          const isCorrect = question.correct_answer_id === answerId;
          state.userAnswers = [
            ...state.userAnswers.filter((ans) => ans.questionId !== questionId),
            { questionId, isCorrect },
          ];

          // Update skor jika benar
          if (isCorrect) {
            state.score += 1;
          }
          // Update progres
          const totalQuestions =
            quiz.subCategory[0].questions.length || state.totalQuestions;
          state.progress = Math.round(
            (state.userAnswers.length / totalQuestions) * 100
          );
        }
      }
    },
    retryIncorrectAnswers: (state) => {
      const quiz = state.quizzes[state.currentQuizIndex];
      if (quiz) {
        const incorrectAnswers = state.userAnswers.filter(
          (ans) => !ans.isCorrect
        );
        const questionIds = incorrectAnswers.map((ans) => ans.questionId);
        quiz.subCategory[0].questions = quiz.subCategory[0].questions.filter(
          (q) => questionIds.includes(q.id)
        );

        // Reset progress untuk jawaban salah
        state.progress = Math.round(
          ((state.userAnswers.length - incorrectAnswers.length) /
            state.totalQuestions) *
            100
        );
      }
    },
  },
});

export const {
  setCurrentQuizIndex,
  setCurrentQuestionIndex,
  setShowResult,
  startQuiz,
  endQuiz,
  updateAnswer,
  retryIncorrectAnswers,
} = quizSlice.actions;

export default quizSlice.reducer;

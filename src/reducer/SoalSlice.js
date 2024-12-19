import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number_discussions: [],
  questions: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  startTime: null, // Waktu mulai pengerjaan soal
  endTime: null, // Waktu akhir pengerjaan soal
  progress: 0, // Progress pengerjaan dalam bentuk width (0 - 100%)
};

const soalSlice = createSlice({
  name: "soal",
  initialState,
  reducers: {
    setNumberDiscussions(state, action) {
      state.number_discussions = action.payload;
    },
    setQuestions(state, action) {
      state.questions = action.payload;
      state.startTime = new Date().toISOString(); // Waktu mulai ketika soal di-set
      state.progress = 0; // Reset progress
    },
    updateUserAnswer(state, action) {
      const { questionId, answerId, isCorrect } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.user_answer = {
          answer_id: answerId,
          is_correct: isCorrect,
          is_answered: true,
          answered_at: new Date().toISOString(),
        };

        // Hitung progress pengerjaan berdasarkan jawaban benar
        const totalQuestions = state.questions.length;
        const correctAnswers = state.questions.filter(
          (q) => q.user_answer?.is_correct
        ).length;

        state.progress = Math.min(100, correctAnswers * 10); // Width progress 10% per jawaban benar

        // Tandai endTime jika semua soal sudah dijawab
        const allAnswered = state.questions.every(
          (q) => q.user_answer?.is_answered
        );
        if (allAnswered) {
          state.endTime = new Date().toISOString();
        }
      }
    },
    resetUserAnswers(state) {
      state.questions.forEach((q) => {
        q.user_answer = {
          answer_id: null,
          is_correct: null,
          is_answered: false,
          answered_at: null,
        };
      });
      state.progress = 0; // Reset progress
      state.startTime = null;
      state.endTime = null;
    },
    resetSoalState(state) {
      return initialState;
    },
  },
});

export const {
  setNumberDiscussions,
  setQuestions,
  updateUserAnswer,
  resetUserAnswers,
  resetSoalState,
} = soalSlice.actions;

export default soalSlice.reducer;

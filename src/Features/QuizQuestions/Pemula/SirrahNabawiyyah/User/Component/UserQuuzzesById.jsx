import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserQuizzesById } from "../Reducer/userQuizzesSlice";

const UserQuizzes = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const { userQuizzes, loading, error } = useSelector(
    (state) => state.userQuizzes
  );

  const handleFetch = () => {
    if (userId.trim()) {
      dispatch(fetchUserQuizzesById(userId));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cari Kuis Berdasarkan ID</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Masukkan ID User"
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleFetch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Cari
        </button>
      </div>

      {loading && <p className="mt-3 text-blue-500">Memuat data...</p>}
      {error && <p className="mt-3 text-red-500">{error}</p>}

      {userQuizzes.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Hasil Kuis</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Quiz ID</th>
                  <th className="p-2 border">Attempt</th>
                  <th className="p-2 border">Grade (%)</th>
                  <th className="p-2 border">Time (s)</th>
                  <th className="p-2 border">Point</th>
                  <th className="p-2 border">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {userQuizzes.map((quiz) => (
                  <tr key={quiz.id} className="text-center border">
                    <td className="p-2 border">{quiz.quiz_id}</td>
                    <td className="p-2 border">{quiz.attempt}</td>
                    <td className="p-2 border">{quiz.percentage_grade}</td>
                    <td className="p-2 border">{quiz.time_duration}</td>
                    <td className="p-2 border">{quiz.point}</td>
                    <td className="p-2 border">
                      {new Date(quiz.created_at).toLocaleDateString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserQuizzes;

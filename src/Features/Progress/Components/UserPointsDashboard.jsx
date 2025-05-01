import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPointById } from "../Reducer/userPoints";

export default function UserPointsDashboard() {
  const dispatch = useDispatch();
  const { userPoints, isLoading, error } = useSelector(
    (state) => state.userPoint
  );

  // Fungsi untuk menghitung total points dari data
  const calculateTotalPoints = useMemo(() => {
    if (!userPoints?.data || !Array.isArray(userPoints.data)) {
      return 0;
    }

    return userPoints.data.reduce((total, pointItem) => {
      return total + (pointItem.points || 0);
    }, 0);
  }, [userPoints]);

  useEffect(() => {
    // Ambil userId dari localStorage dan langsung fetch data
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchUserPointById(userId));
    }
  }, [dispatch]);

  // Format tanggal ke format Indonesia
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            User Points Dashboard
          </h1>
        </div>

        <div className="p-6">
          {isLoading && (
            <div className="flex justify-center items-center p-8">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>Error: {error}</p>
            </div>
          )}

          {!isLoading && !error && userPoints?.data && (
            <div>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  Informasi User
                </h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Total Point: </span>
                  <span className="font-bold text-2xl text-blue-600">
                    {calculateTotalPoints}
                  </span>
                </p>
                {userPoints.totalPoints !== undefined && (
                  <p className="text-sm text-gray-500">
                    (Total point dari API: {userPoints.totalPoints})
                  </p>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-4">Riwayat Point</h3>

              {userPoints.data && userPoints.data.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left">No</th>
                        <th className="py-3 px-4 text-left">Quiz</th>
                        <th className="py-3 px-4 text-left">Point</th>
                        <th className="py-3 px-4 text-left">Tanggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userPoints.data.map((point, index) => (
                        <tr
                          key={point.id}
                          className="border-t border-gray-200 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">{index + 1}</td>
                          <td className="py-3 px-4">
                            {point.quiz?.title || "Quiz tidak tersedia"}
                          </td>
                          <td className="py-3 px-4 font-medium text-blue-600">
                            {point.points}
                          </td>
                          <td className="py-3 px-4">
                            {formatDate(point.createdAt)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50 font-bold">
                        <td colSpan="2" className="py-3 px-4 text-right">
                          Total Point:
                        </td>
                        <td className="py-3 px-4 text-blue-700">
                          {calculateTotalPoints}
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Belum ada data point untuk user ini</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

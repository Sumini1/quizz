import React, { useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnitsById } from "../Reducer/unitsSlice";
import { fetchReadings } from "../../../../reducer/readingsSlice";

const Readings = () => {
  const navigate = useNavigate();
  const { theme, getButtonClass, getThemeModalCategory } = useTheme();
  const { id } = useParams();
  const dispatch = useDispatch();

  const readingsState = useSelector((state) => state.readings);
  const unitsState = useSelector((state) => state.units);

  const readings = readingsState ? readingsState.data : [];
  const readingsStatus = readingsState ? readingsState.status : "idle";

  const detail = unitsState ? unitsState.detail : {};
  const status = unitsState ? unitsState.status : "idle";

  useEffect(() => {
    console.log("Fetching unit with ID:", id); // Log ID
    if (id) {
      dispatch(fetchUnitsById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchReadings());
  }, [dispatch]);

  // Log status and detail for debugging
  console.log("Fetch status:", status);
  console.log("Unit detail:", detail);
  console.log("Readings data:", readings);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  if (status === "failed") {
    return <div>Error fetching unit data.</div>;
  }

  // if (readingsStatus === "loading") {
  //   return <div>Loading readings...</div>;
  // }

  if (readingsStatus === "failed") {
    return <div>Error fetching readings data.</div>;
  }

  // Filter readings based on the current unit ID
  const filteredReadings = readings.filter(
    (reading) => reading.unit_id === parseInt(id)
  );

  return (
    <div className={`flex flex-col min-h-screen ${getThemeModalCategory()}`}>
      <div
        className="flex items-center gap-3 mt-5 mx-3 text-lg mb-2"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <h1 className="font-semibold text-xl"> Artikel</h1>
      </div>

      <div className="flex flex-col p-5 gap-3">
        {/* <h1 className="text-2xl font-semibold">
          {detail?.name || "Judul tidak tersedia"}
        </h1> */}

        {/* Display filtered readings */}
        <div>
          {filteredReadings.length > 0 ? (
            filteredReadings.map((reading) => (
              <div key={reading.id} className="mb-4">
                <h2 className="text-lg font-semibold mb-2">{reading.title}</h2>
                <p className="text-md ">{reading.description_long}</p>
              </div>
            ))
          ) : (
            <p>Tidak ada bacaan untuk unit ini.</p>
          )}
        </div>

        {/* <button
          onClick={() => navigate(-1)}
          className={`mt-16 w-full text-[15px] font-medium py-2 px-4 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button> */}
      </div>
    </div>
  );
};

export default Readings;

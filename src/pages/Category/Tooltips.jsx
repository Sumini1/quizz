import React, { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";
import { fetchTooltips } from "../../reducer/tooltipsSlice";

const Tooltips = () => {
  const { data, status, error } = useSelector((state) => state.tooltips);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTooltips());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col gap-3 p-5 mt-5">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        {data.length > 0
          ? data.map((tooltip) => (
              <div key={tooltip.id} className="flex flex-col gap-3">
                <h1 className="flex  items-center">
                  <span className="text-md font-medium">Keyword : </span>
                  <span className="flex ml-2 text-md font-medium">{tooltip.keyword}</span>
                </h1>
                <h2>
                  <span className="font-semibold">Descripsi Pendek:</span>
                  <span className="font-[600] ml-1"></span>
                  {tooltip.tooltip_short}
                </h2>
                <p>
                  <span className="font-semibold">Descripsi Panjang:</span>
                  <span className="font-[600] ml-1"></span>
                  {tooltip.tooltip_long}
                </p>
              </div>
            ))
          : status === "succeeded" && <p>Tidak ada data tooltips tersedia.</p>}
      </div>
    </div>
  );
};

export default Tooltips;

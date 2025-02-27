// components/Users.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../reducer/usersSlice";

const Users = () => {
  const { data, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col gap-3 p-5 mt-5">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        {data.length > 0
          ? data.map((users) => (
              <div key={users.id} className="flex flex-col gap-3">
                <h1 className="flex items-center">{users.email}</h1>
              </div>
            ))
          : status === "succeeded" && <p>Tidak ada data users tersedia.</p>}
      </div>
    </div>
  );
};

export default Users;

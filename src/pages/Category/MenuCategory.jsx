import React, { useState } from "react";
import { BiSolidCommentError } from "react-icons/bi";

const Category = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 mt-10 justify-center item">
          <h1 className="text-xl font-semibold mx-10">
            Apa yang mau dipelajari ?{" "}
          </h1>
          <p className="mx-10 mt-16 border p-2 rounded-md flex">
            Keimanan
            <span className="ml-auto mt-2">
              <BiSolidCommentError />
            </span>
          </p>
          <p className="mx-10 border p-2 rounded-md flex">
            Ibadah{" "}
            <span className="ml-auto mt-2">
              <BiSolidCommentError />
            </span>
          </p>
          <p className="mx-10 border p-2 rounded-md flex">
            Akhlak{" "}
            <span className="ml-auto mt-2">
              <BiSolidCommentError />
            </span>
          </p>
          <p className="mx-10 border p-2 rounded-md flex">
            Muamallah{" "}
            <span className="ml-auto mt-2">
              <BiSolidCommentError />
            </span>
          </p>
          <p className="mx-10 border p-2 rounded-md flex">
            Sejarah{" "}
            <span className="ml-auto mt-2">
              <BiSolidCommentError />
            </span>
          </p>
        </div>
        <button className="bg-orange-600 text-white mx-10 py-2 rounded-md mt-48">Pilih</button>
      </div>
    );
};

export default Category;
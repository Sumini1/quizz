import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryId } from "../../reducer/categorySlice";

const CategoryId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.category);

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryId(id));
    }
  }, [dispatch, id]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed")
    return <p className="text-red-500">Error: {error}</p>;

  if (!data || !data.data || data.data.length === 0)
    return <p className="text-gray-500">Data tidak ditemukan.</p>;

  const processHTMLContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    doc
      .querySelectorAll("p")
      .forEach((p) =>
        p.classList.add("text-sm", "text-gray-700", "leading-relaxed", "mb-2")
      );
    doc
      .querySelectorAll("li")
      .forEach((li) =>
        li.classList.add("text-sm", "text-gray-700", "leading-relaxed", "mb-2")
      );
    doc
      .querySelectorAll("h1")
      .forEach((h1) => h1.classList.add("text-md", "font-medium", "mb-1"));
    doc
      .querySelectorAll("h2")
      .forEach((h2) => h2.classList.add("text-lg", "font-semibold", "mb-3"));

    return doc.body.innerHTML;
  };

  return (
    <div>
      {data.data.map((item) => (
        <div key={item.id} className="p-4 border rounded-lg shadow-md mb-4">
          <p className="text-md text-gray-600">{item.description_short}</p>
          {item.image_url && (
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-auto my-3"
            />
          )}
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: processHTMLContent(item.description_long),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryId;

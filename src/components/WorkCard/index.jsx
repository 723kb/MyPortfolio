import React from "react";
import { Link } from "react-router-dom";

const WorkCard = ({ work }) => {
  // work が undefined の場合のエラー処理を追加
  if (!work) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-slate-200">
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
        <p className="text-gray-600 mb-4">{work.description}</p>
        <p className="text-sm text-gray-600 mb-4">{work.technologyUsed}</p>
        <Link to={`/work/${work.id}`} className="text-blue-500 hover:underline">
          詳細を見る
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;

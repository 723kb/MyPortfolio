import React from "react";
import { useParams, Link } from "react-router-dom";
import { works } from "../../data/works";

const WorkDetail = () => {
  const { id } = useParams(); // URLパラメータを取得するフック
  // works配列内をidと一致するものがあるかチェック→parseIntでURLからのidを整数型にする
  const work = works.find((w) => w.id === parseInt(id));

  if (!work) {
    return <div>作品が見つかりません</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
    <div className="max-w-4xl w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{work.title}</h1>
      <img
        src={work.image}
        alt={work.title}
        className="w-full mb-8 rounded-lg shadow-md"
      />
      <div className="space-y-6 overflow-hidden break-words">
        <p className="text-gray-700">{work.description}</p>
        <p className="text-gray-700">
          <span className="font-semibold">使用技術</span>
          <br />
          {work.technologyUsed}
        </p>
        <p className="text-gray-700 whitespace-pre-wrap">
          <span className="font-semibold">主な機能</span>
          <br />
          {work.mainFunction}
        </p>
        <p className="text-gray-700 whitespace-pre-wrap">
          <span className="font-semibold">こだわりポイント</span>
          <br />
          {work.comment}
        </p>
        <p className="text-gray-700 whitespace-pre-wrap">
          <span className="font-semibold">苦労した点</span>
          <br />
          {work.point}
        </p>
        {work.remarks && (
          <p className="text-gray-700 whitespace-pre-wrap">
            <span className="font-semibold">備考</span>
            <br />
            {work.remarks}
          </p>
        )}
      </div>
      <div className="flex justify-center space-x-8 my-8"> {/* スペースを増やし、マージンを調整 */}
        <a
          href={work.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-red-500 hover:underline font-semibold"
        >
          GitHub
        </a>
        <a
          href={work.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-red-500 hover:underline font-semibold"
        >
          Demo
        </a>
      </div>
      <div className="text-center mt-8">
        <Link
          to="/works"
          className="text-blue-500 hover:underline font-semibold"
        >
          作品一覧に戻る
        </Link>
      </div>
    </div>
  </main>
  );
};

export default WorkDetail;

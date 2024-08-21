import React from "react";
import { useParams } from "react-router-dom";
import { works } from "../../data/works";
import WorkHeader from "../../components/WorkHeader";
import WorkInfo from "../../components/WorkInfo";
import WorkLinks from "../../components/WorkLinks";
import BackToWorks from "../../components/BackToWorks";

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
        {/* =の左props名 右は親コンポーネントから子コンポーネントに渡す値 */}
        <WorkHeader title={work.title} image={work.image} />
        <WorkInfo work={work} />
        <WorkLinks github={work.github} demo={work.demo} />
        <BackToWorks />
      </div>
    </main>
  );
};

export default WorkDetail;

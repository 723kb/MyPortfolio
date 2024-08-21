import React from "react";

// propsとしてworkオブジェクト丸ごと受け取る プロパティの多くを使うから個別で渡すより魔あるごと渡した方が簡単
const WorkInfo = ({ work }) => {
  return (
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
  );
};

export default WorkInfo;

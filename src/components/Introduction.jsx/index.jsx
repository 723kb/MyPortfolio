import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row sm:justify-between">
      <p>
        わたしは新卒から11年看護師として働いていました。キャリアチェンジを考え、2024年2月よりプログラミング学習を開始しました。
        <br />
        4月よりスクールに通学し、これまでにHTML / CSS / JavaScript / PHP /
        Laravelを学習しました。
        <br />
        現在エンジニアへの転職を目指して準備中です。
      </p>
      <img
        src="/images/myphoto.PNG"
        alt="アイコン写真"
        className="rounded-full w-[200px] mb-2"
      />
    </div>
  );
};

export default Introduction;

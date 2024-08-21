import React from "react";

// propsとしてtitle,imageを受け取る workオブジェクト全体は必要ではない
const WorkHeader = ({ title, image }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-full mb-8 rounded-lg shadow-md"
      />
    </>
  );
};

export default WorkHeader;

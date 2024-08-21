import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center my-auto">
        <h2 className="text-4xl font-bold m-4">
          お探しのページが見つかりません
        </h2>
        <Link
          to="/"
          className="inline-block text-blue-500 hover:underline font-semibold"
        >
          ホームへ戻る
        </Link>
      </div>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">2024©723kb</p>
      </footer>
    </>
  );
};

export default NotFound;

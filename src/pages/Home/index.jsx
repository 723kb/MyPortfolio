import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section.jsx";
import Introduction from "../../components/Introduction.jsx";
import SkillList from "../../components/SkillList.jsx";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

const Home = () => {
  const languages = [
    "2024.2- HTML/CSS",
    "2024.2- JavaScript",
    "2024.5- React",
    "2024.6- PHP",
    "2024.6- SQL",
    "2024.7- Laravel",
  ];

  const tools = ["GitHub", "Docker", "Amazon Web Services"];

  return (
    <>
    <Header />
    <main className="mt-4 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">ようこそ、私のポートフォリオへ</h1>
      <p className="mt-2">
        はじめまして！ここではわたしが今までに作った作品の一部を紹介します。
      </p>
      <Section title="自己紹介">
        <Introduction />
      </Section>
      <Section title="知識やスキルのレベル">
        <div className="flex flex-col sm:flex-row">
          <div>
            <SkillList
              title="使用経験がある言語（フレームワーク）"
              skills={languages}
            ></SkillList>
          </div>
          <div className="mt-4 sm:ml-40 sm:mt-0">
            <SkillList title="使用経験があるツール" skills={tools} />
          </div>
        </div>
      </Section>
      <Section title="得意な分野">
        <ul>
          <li>PHP</li>
        </ul>
      </Section>
      <Section title="現在学んでいること">
        <ul>
          <li>React＋Laravelでプロダクト制作中。</li>
          <li>11月にJava Bronze受験予定。</li>
        </ul>
      </Section>
      <Section title="今後やっていきたい方向性">
        <ul>
          <li></li>
        </ul>
      </Section>
      <Section title="アウトプット">
        <ul>
          <li>
            <Link
              to="/works"
              className="inline-block text-blue-500 hover:underline font-semibold"
            >
              作品一覧
            </Link>
          </li>
        </ul>
      </Section>
    </main>
    <Footer />
    </>
  );
};

export default Home;

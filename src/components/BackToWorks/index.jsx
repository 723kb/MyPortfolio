import React from 'react'
import { Link } from 'react-router-dom';

const BackToWorks = () => {
  return (
    <div className="text-center mt-8">
    <Link
      to="/works"
      className="text-blue-500 hover:underline font-semibold"
    >
      作品一覧に戻る
    </Link>
  </div>
  )
}

export default BackToWorks
import React from 'react'
import { works } from '../../data/works';
import WorkCard from '../WorkCard';

const WorkList = () => {
    // works が空の配列や undefined の場合のエラー処理を追加
    if (!works || works.length === 0) return <p>プロジェクトがありません。</p>;
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* works配列を展開 展開された各要素workについてWorkCardコンポーネント作成 */}
    {works.map(work => (
      <WorkCard key={work.id} work={work} /> // 左props名 workオブジェクトを渡してる
    ))}
  </div>
  )
}

export default WorkList
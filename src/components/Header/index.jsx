import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-gray-300 transition-colors">ホーム</Link></li>
                    <li><Link to="/works" className="hover:text-gray-300 transition-colors">作品一覧</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Header
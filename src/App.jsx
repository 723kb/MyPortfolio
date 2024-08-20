import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col  min-h-screen">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/work/:id" element={<WorkDetail />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

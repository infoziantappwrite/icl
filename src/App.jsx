import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Placement from "./pages/Placement";
import Internship from "./pages/Internship";
import COE from "./pages/COE";
import Training from "./pages/Training";
import CodeChef from "./pages/CodeChef";
import EduTech from "./pages/EduTech";

function App() {
  return (
    <Router>
      <Header />

      <div className="p-6 min-h-screen">
        <Routes>
          <Route path="/placement" element={<Placement />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/coe" element={<COE />} />
          <Route path="/training" element={<Training />} />
          <Route path="/codechef" element={<CodeChef />} />
          <Route path="/edutech" element={<EduTech />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

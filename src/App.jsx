import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Placement from "./pages/Placement";
import Internship from "./pages/Internship";
import COE from "./pages/COE";
import Training from "./pages/Training";
import CodeChef from "./pages/CodeChef";
import EduTech from "./pages/EduTech";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Refund from "./pages/Refund";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div>  
        <Routes>
          <Route path="/" element={<Placement />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/coe" element={<COE />} />
          <Route path="/training" element={<Training />} />
          <Route path="/codechef" element={<CodeChef />} />
          <Route path="/edutech" element={<EduTech />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

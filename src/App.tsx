import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <div>
      <LoginPage />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<WelcomePage />} />
    //     <Route path="/LoginPage" element={<LoginPage />} />
    //     <Route path="/SignupPage" element={<SignupPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

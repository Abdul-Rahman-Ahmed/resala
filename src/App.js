import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/auth/login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<Login /> />
        <Route path="/main" element=<Main /> />
      </Routes>
    </Router>
  );
};

export default App;

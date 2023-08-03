import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/home";
import Login from "./Pages/login";
import Admin_Login from "./Pages/admin_login";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/admin-login" element={<Admin_Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

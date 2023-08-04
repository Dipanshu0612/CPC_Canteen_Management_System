import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/home";
import Login from "./Pages/login";
import Admin_Login from "./Pages/admin_login";
import Forgot_passsword from "./Pages/forgot-passsword";
import My_Cart from "./Pages/my_cart";
import Inventory from "./Pages/inventory";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/admin-login" element={<Admin_Login />} />
        <Route path="/forgot-password" element={<Forgot_passsword />} />
        <Route path="/my-cart" element={<My_Cart />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

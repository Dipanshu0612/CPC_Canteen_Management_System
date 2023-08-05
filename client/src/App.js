import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/home";
import Login from "./Pages/login";
import Admin_Login from "./Pages/admin_login";
import Forgot_passsword from "./Pages/forgot-passsword";
import My_Cart from "./Pages/my_cart";
import Inventory from "./Pages/inventory";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

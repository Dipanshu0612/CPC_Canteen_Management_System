import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/home";
import Login from "./Pages/login";
import AdminLogin from "./Pages/admin_login";
import ForgotPasssword from "./Pages/forgot-passsword";
import MyCart from "./Pages/my_cart";
import Inventory from "./Pages/inventory";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home"  element={<Home />}/>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/my-cart" element={<MyCart />} />
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

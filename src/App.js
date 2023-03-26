import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder.jsx";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import NotFound from "./components/layout/NotFound";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsucess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/tables.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/users";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated ,user} = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;

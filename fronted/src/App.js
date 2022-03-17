import "./App.css";
import Header from "./component/layout/Header/Header.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { LoadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
// import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js"
import ProductList from "./component/admin/ProductList.js"
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList";
import ProcessOrder from "./component/admin/ProcessOrder";
import UsersList from "./component/admin/UsersList";
import UpdateUser from "./component/admin/UpdateUser";
import ProductReviews from "./component/admin/ProductReviews";
import Contact from "./component/Contact/Contact"
import About from "./component/About/About"
import PageNotFound from "./component/PageNotFound/PageNotFound"
function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(LoadUser());
    getStripApiKey();
  }, []);

 window.addEventListener("contextmenu",(e)=>e.preventDefault);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <ProtectedRoute path='/account' component={Profile} /> */}

        <Route
          path="/account"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/me/update"
          element={
            isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/password/update"
          element={
            isAuthenticated ? <UpdatePassword /> : <Navigate to="/login" />
          }
        />

        <Route path="/password/forgot" element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route path="/login" element={<LoginSignUp />} />

        <Route path="/cart" element={<Cart />} />

        {!loading && (
          <Route
            path="/shipping"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
                <Shipping />
              )
            }
          />
        )}

        

        {stripeApiKey && (
          <Route
            path="/process/payment"
            element={
              isAuthenticated ? (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        <Route
          path="/success"
          element={
            isAuthenticated ? <OrderSuccess /> : <Navigate to="/login" />
          }
        />

        {!loading && (
          <Route
            path="/orders"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
                <MyOrders />
              )
            }
          />
        )}
        
        {!loading && (
          <Route
            path="/order/confirm"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
                <ConfirmOrder />
              )
            }
          />
        )}

        {!loading && (
          <Route
            path="/order/:id"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
                <OrderDetails />
              )
            }
          />
        )}

        {loading === false && (
          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <Dashboard />
              )
            }
          />
        )}
        
        {loading === false && (
          <Route
            path="/admin/products"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <ProductList />
              )
            }
          />
        )}

        {loading === false && (
          <Route
            path="/admin/product"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <NewProduct />
              )
            }
          />
        )}
        {loading === false && (
          <Route
            path="/admin/product/:id"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <UpdateProduct />
              )
            }
          />
        )}
        {loading === false && (
          <Route
            path="/admin/orders"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <OrderList />
              )
            }
          />
        )}

        {loading === false && (
          <Route
            path="/admin/order/:id"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <ProcessOrder />
              )
            }
          />
        )}

        {loading === false && (
          <Route
            path="/admin/users"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <UsersList />
              )
            }
          />
        )}

        {loading === false && (
          <Route
            path="/admin/user/:id"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <UpdateUser />
              )
            }
          />
        )}

        {loading === false && (
          <Route
            path="/admin/reviews"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
               user.role !== "admin" ? <Navigate to="/login" />: <ProductReviews />
              )
            }
          />
        )}

       

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

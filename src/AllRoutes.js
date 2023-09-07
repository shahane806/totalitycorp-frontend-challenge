import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FilterPage from "./Pages/FilterPage/FilterPage";
import Cart from "./Pages/Cart/Cart";
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import PaymentFailed from "./Pages/Payment/PaymentFailed";

const AllRoutes = () => {
  return (
    <div id="AllRoutes">
      <Router>
        <Routes>
          <Route path="/*" element="404 PAGE NOT FOUND" errorElement="Error" />
          <Route
            path="/"
            element={
              <>
                <Navbar display="none" />
                <Dashboard />
              </>
            }
            errorElement="Error"
          />
          <Route
            path="/Filter"
            element={
              <>
                <Navbar />
                <FilterPage />
              </>
            }
            errorElement="Error"
          />
          <Route
            path="/Cart"
            element={
              <>
                <Navbar display="none" />
                <Cart />
              </>
            }
            errorElement="Error"
          />
          <Route
            path="/Auth/Login"
            element={
              <>
                <Navbar display="none" />
              </>
            }
            errorElement="Error"
          />
          <Route
            path="/Payment/Successful"
            element={
              <>
                <Navbar display="none" />
                <PaymentSuccess/>
              </>
            }
            errorElement="Error"
          />
          <Route
            path="/Payment/Failed"
            element={
              <>
                <Navbar display="none" /><PaymentFailed/>
              </>
            }
            errorElement="Error"
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;

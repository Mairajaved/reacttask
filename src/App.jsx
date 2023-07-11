/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Page404 from "./Pages/Page404";
import CategoryPage from "./Pages/CategoryPage";
import SingleProduct from "./Pages/SingleProduct";
// import Components
import NavigationBar from "./Components/NavigationBar";
import FooterSection from "./Components/FooterSection";
import NewsletterSection from "./Components/NewsletterSection";

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <NavigationBar />
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route path="/products/:productID" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} component={Login} />
          <Route path="/signup" element={<Signup />} component={Signup} />

          {/* <Route path="*" element={<Page404 component={Page404} />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route path="*" element={<Page404 component={Page404} />} />
          {/* <Route path="*" element={<Navigate to="/login/" replace={true} />} /> */}
        </Routes>
      )}
      <NewsletterSection />
      <FooterSection />
    </>
  );
}

export default App;

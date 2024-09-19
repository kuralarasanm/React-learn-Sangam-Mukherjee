import { Fragment } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";

function App() {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold sm:text-5xl text-center hover:underline">Shopping Cart</h1>
      <Link to="/products" className="text-red-700 ms-2 font-bold text-3xl  ">-Products</Link>  
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
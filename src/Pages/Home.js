import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/footer";
import ProductList from "../components/ProductList/ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      {/* shop by category */}
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;

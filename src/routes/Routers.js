import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";

import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import AssociatedPrinters from "../pages/AssociatedPrinters";
import PageNotFound from "../pages/PageNotFound";
import ProductsDetails from "../pages/ProductsDetails";

const Routers = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/associated-printer" element={<AssociatedPrinters />} />
      <Route path="/products" element={<ProductsDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;

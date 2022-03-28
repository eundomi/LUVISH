import React from "react";
import Home from "./pages/Home";
import Calender from "./pages/Calender";
import Letter from "./pages/Letter";
import Wishlist from "./pages/Wishlist";
import Mypage from "./pages/Mypage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Calender />} path="/calender" />
      <Route element={<Letter />} path="/letter" />
      <Route element={<Wishlist />} path="/wishlist" />
      <Route element={<Mypage />} path="/mypage" />
    </Routes>
  );
}

export default App;

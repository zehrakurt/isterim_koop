import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AboutUs from "./pages/about us/AboutUs";
import Mission from "./pages/mission/Mission";
import Vision from "./pages/vision/Vision";
import Academy1 from "./pages/academy/Academy1";
import Academy2 from "./pages/academy/Academy2";
import Contact from "./pages/contact/Contact";
import BizdenHaberler from "./pages/bizden haberler/BizdenHaberler";
import HaberDetay from "./pages/bizden haberler/HaberDetay";
import Home2 from "./home2";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home2/>} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="misyonumuz" element={<Mission />} />
            <Route path="vizyonumuz" element={<Vision />} />
            <Route path="akademi-1" element={<Academy1 />} />
            <Route path="akademi-2" element={<Academy2 />} />
            <Route path="iletisim" element={<Contact />} />
            <Route path="bizden-haberler" element={<BizdenHaberler />} />
            <Route path="bizden-haberler/:id" element={<HaberDetay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
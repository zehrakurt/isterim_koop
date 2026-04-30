import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AboutUs from "./pages/about us/AboutUs";
import Mission from "./pages/mission/Mission";
import Vision from "./pages/vision/Vision";
import Academy1 from "./pages/academy/Academy1";
import Contact from "./pages/contact/Contact";
import BizdenHaberler from "./pages/bizden haberler/BizdenHaberler";
import HaberDetay from "./pages/bizden haberler/HaberDetay";
import Home2 from "./home2";
import ScrollToTop from "./ScrollToTop";
import AdminHaberler from "./pages/admin/AdminHaberler";

function App() {
  return (
    <>
   
      <BrowserRouter> <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home2/>} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="misyonumuz" element={<Mission />} />
            <Route path="vizyonumuz" element={<Vision />} />
            <Route path="akademi-1" element={<Academy1 />} />
            <Route path="iletisim" element={<Contact />} />
            <Route path="bizden-haberler" element={<BizdenHaberler />} />
            <Route path="bizden-haberler/:id" element={<HaberDetay />} />
          </Route>
          
          {/* Gizli Admin Rotası - MainLayout dışında (veya isterseniz içinde de olabilir, şimdilik dışında temiz sayfa olarak tutuyoruz) */}
          <Route path="/admin" element={<AdminHaberler />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about us/AboutUs";
import Contact from "./pages/contact/Contact";
import BizdenHaberler from "./pages/bizden haberler/BizdenHaberler";
import HaberDetay from "./pages/bizden haberler/HaberDetay";

function App() {


  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="bizden-haberler" element={<BizdenHaberler />} />
          <Route path="bizden-haberler/:id" element={<HaberDetay />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

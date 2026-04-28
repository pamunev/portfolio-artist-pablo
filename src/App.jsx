import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Acting from "./pages/Acting";
import Writing from "./pages/Writing";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import News from "./pages/News";
import Contact from "./pages/Contact";
import GalleryProduction from "./pages/GalleryProduction";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="acting" element={<Acting />} />
        <Route path="writing" element={<Writing />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:slug" element={<GalleryProduction />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

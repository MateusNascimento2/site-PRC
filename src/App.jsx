import { Home } from "./pages/home";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Blog } from "./pages/blog";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

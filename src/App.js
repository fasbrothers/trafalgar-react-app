import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/articles" exact element={<Articles />} />
        <Route path="/services" exact element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

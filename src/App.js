import Home from "./components/home/Home";
import Learn from "./pages/learn/Learn";
import Shop from "./pages/shop/Shop";
import ThankYou from "./components/ThankYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn/:id" element={<Learn />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

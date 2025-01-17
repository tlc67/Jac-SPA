import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyImage from "./components/DailyImage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RandomJoke from "./components/RandomJoke";

function App() {
  return (
    <div>
      <Router>
        <header>
          <div>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/" className="site-title">
                    AstroKids Adventures
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/DailyImage">NASA Daily Image</Link>
                </li>
                <li>
                  <Link to="/RandomJoke">Random Joke</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DailyImage" element={<DailyImage />} />
          <Route path="/RandomJoke" element={<RandomJoke />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <footer class="copyright">Ctrl Alt Elite Copyright &copy; 2024</footer>
    </div>
  );
}

export default App;

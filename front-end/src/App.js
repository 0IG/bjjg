import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORTS
import New from "./Pages/New";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommended/new" element={<New />} />
            <Route exact path="/recommendation/:id" element={<Show />} />
            <Route path="/recommended/:id/edit" element={<Edit />} />
            <Route path="/recommended" element={<Index />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

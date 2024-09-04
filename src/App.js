import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/hackathon" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

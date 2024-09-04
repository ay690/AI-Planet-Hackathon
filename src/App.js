import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/hackathon" element={<Home />} />
          <Route path="/hackathon/*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

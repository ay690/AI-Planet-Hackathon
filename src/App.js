import { Layout, ChallengeDetails } from "./components/index";
import { Home, Admin, Error } from "./pages/index";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/hackathon" element={<Home />} />
          <Route path="/hackathon/admin" element={<Admin />} />
          <Route path="/hackathon/details/:id" element={<ChallengeDetails />} />
          <Route path="/hackathon/*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

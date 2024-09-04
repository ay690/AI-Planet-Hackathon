import { Layout, ChallengeDetails } from "./components/index";
import { Home, Admin, Error, EditChallenge } from "./pages/index";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/hackathon" />} />
          <Route path="/hackathon" element={<Home />} />
          <Route path="/hackathon/admin" element={<Admin />} />
          <Route path="/hackathon/details/:id" element={<ChallengeDetails />} />
          <Route path="/hackathon/admin/:id" element={<EditChallenge />} />
          <Route path="/hackathon/*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

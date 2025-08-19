import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BlocksPage from "./components/Blocks/BlocksPage";
import BlockDetail from "./components/Blocks/BlockDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blocks" element={<Dashboard />}>
        <Route index element={<BlocksPage />} />
        <Route path="block/:blockId" element={<BlockDetail />} />
      </Route>
    </Routes>
  );
}

export default App

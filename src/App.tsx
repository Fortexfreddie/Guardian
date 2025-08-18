import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BlocksPage from "./components/Blocks/BlocksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blocks" element={<Dashboard />}>
        <Route index element={<BlocksPage />} />
      </Route>
    </Routes>
  )
}

export default App

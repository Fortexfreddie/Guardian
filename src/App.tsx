import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BlocksPage from "./components/Blocks/BlocksPage";
import BlockDetail from "./components/Blocks/BlockDetail";
import TransactionsPage from "./components/Transactions/TransactionsPage";
import TransactionsDetail from "./components/Transactions/TransactionsDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blocks" element={<Dashboard />}>
        <Route index element={<BlocksPage />} />
        <Route path="block/:blockId" element={<BlockDetail />} />
      </Route>
      <Route path="/transactions" element={<Dashboard />}>
        <Route index element={<TransactionsPage />} />
        <Route path="transaction/:transactionId" element={<TransactionsDetail />} />
      </Route>
    </Routes>
  );
}

export default App

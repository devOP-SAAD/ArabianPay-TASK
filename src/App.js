import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Dashboard Component/Sidebar";
import Navbar from "./Dashboard Component/Navbar";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import FinancialInfo from "./pages/FinancialInfo";
import AllSuppliers from "./pages/AllSuppliers"; // Import AllSuppliers Component

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar isOpen={isSidebarOpen} />
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <div style={{ padding: "1rem", overflow: "auto" }}>{children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/accounts" element={<AppLayout><Accounts /></AppLayout>} />
        <Route path="/accounts/suppliers" element={<AppLayout><AllSuppliers /></AppLayout>} />
        <Route path="/products" element={<AppLayout><Products /></AppLayout>} />
        <Route path="/orders" element={<AppLayout><Orders /></AppLayout>} />
        <Route path="/financial" element={<AppLayout><FinancialInfo /></AppLayout>} />
        <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

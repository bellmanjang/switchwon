import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/Login";
import ExchangePage from "@/pages/Exchange";
import OrdersPage from "@/pages/Orders";
import { RequireAuth } from "@/features/auth/RequireAuth";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/exchange"
        element={
          <RequireAuth>
            <ExchangePage />
          </RequireAuth>
        }
      />
      <Route
        path="/orders"
        element={
          <RequireAuth>
            <OrdersPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

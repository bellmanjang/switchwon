import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/Login";
import ExchangePage from "@/pages/Exchange";
import OrdersPage from "@/pages/Orders";
import { RequireAuth } from "@/features/auth/RequireAuth";
import NotFoundPage from "@/pages/NotFound";
import { Layout } from "@/app/layouts/Layout";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

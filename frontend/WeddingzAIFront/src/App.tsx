import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrefFormPage from "./pages/PrefFormPage";
import TodoListPage from "./pages/TodoListPage";
import HomePage from "./components/HomePage/HomePage";
import WeddingDashboard from "./components/WeddingDashboard/WeddingDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weddash" element={<WeddingDashboard/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<PrefFormPage />} />
        <Route path="/todolist" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

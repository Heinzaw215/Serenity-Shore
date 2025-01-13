import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Menu, Login, Service, Booking, NotFound } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        {/* Use the `element` prop to pass JSX */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

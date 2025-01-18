import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Help, Menu, Login, Service, Booking, NotFound, Event, Room } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        {/* Use the `element` prop to pass JSX */}
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/event" element={<Event />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/room" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

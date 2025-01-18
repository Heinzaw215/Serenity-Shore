import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { NavBar, Footer } from './components';
import { Home, Help, Login, Service, Booking, NotFound, Event, Room } from './pages';

function App() {
  const location = useLocation();
  const hideNavBarPaths = ['/login', '/booking'];
  const hideFooterPaths = ['/login'];
  return (
    <div className="app">
      {!hideNavBarPaths.includes(location.pathname) && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/event" element={<Event />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/room" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
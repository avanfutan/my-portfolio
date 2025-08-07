import './App.css';
import {Route, Routes} from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import ContactUsPage from './pages/ContactUs';
import HomePage from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col p-5">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

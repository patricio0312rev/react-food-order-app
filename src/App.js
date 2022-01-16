import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import MenuPage from './pages/menu/menu.component';
import AboutPage from './pages/about/about.component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/menu" exact element={<MenuPage />} />
          <Route path="/about" exact element={<AboutPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

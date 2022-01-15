import Navbar from './components/navbar/navbar.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" exact element={<HomePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

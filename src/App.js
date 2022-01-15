import './App.css';

import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

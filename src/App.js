// import logo from './logo.svg';
import './App.css';
import Appbar from "./components/Appbar"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/Navigation/NavBar';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <img src="public/logo.png" alt="" />
    </div>
  );
}

export default App;

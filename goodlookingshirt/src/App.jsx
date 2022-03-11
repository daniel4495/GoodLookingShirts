import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/Navigation/NavBar';
import ItemListContainer from './Components/ItemContainer/ItemListContainer.jsx';


function App() {
  const tittle = "Unisex shirts // Premium materials"
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer titulo={tittle}/>
    </div>
  );
}

export default App;
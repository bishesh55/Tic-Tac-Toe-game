
import './App.css';
import Home from './assets/Home';
import { BiBody } from "react-icons/bi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function App() {
  return (
    <div className="App">
     <Home/>
     {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
     <BiBody/>
    </div>
  );
}

export default App;

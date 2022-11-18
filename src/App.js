import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import Calendrier from "./composants/Calendrier";
import RendezVous from "./composants/RendezVous";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App" >
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Calendrier/>}></Route>
          <Route path="/rendez-vous" element={<RendezVous/>}></Route>
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;

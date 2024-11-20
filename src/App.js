import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import CategoryList from "./component/CategoryList/CategoryList";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <div style={{height:"1000px",}}><CategoryList></CategoryList></div>
    
    <Footer></Footer>
    </>
  );
}

export default App;

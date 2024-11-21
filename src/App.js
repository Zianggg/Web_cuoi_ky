import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import CategoryList from "./component/CategoryList/CategoryList";
import LandingPage from "./component/LandingPage/LandingPage";




function App() {
  return (
    <>
    <BrowserRouter><NavBar></NavBar></BrowserRouter>
    
    <div style={{height:"1000px"}}>
      <LandingPage></LandingPage>
    </div>
      
    <Footer></Footer>
    </>
  );
}

export default App;

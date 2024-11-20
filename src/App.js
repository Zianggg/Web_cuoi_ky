import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import PreviewBookList from "./component/PreviewBookList/PreviewBookList";
import BookPage from "./page/BookPage/BookPage";
import BorrowBookTicket from "./page/BookBorrowTicket/BookBorrowTicket";
import BookDisplay from "./page/BookDisplay/BookDisplay";
import CategorgyCard from "./component/CategoryCard/CategoryCard";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <div style={{height:"1000px", display:"flex", alignItems:"center", justifyContent:"center"}}><CategorgyCard/></div>
    
    <Footer></Footer>
    </>
  );
}

export default App;

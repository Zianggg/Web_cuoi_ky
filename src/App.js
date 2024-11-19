import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import PreviewBookList from "./component/PreviewBookList/PreviewBookList";
import BookPage from "./page/BookPage/BookPage";
import BorrowBookTicket from "./page/BookBorrowTicket/BookBorrowTicket";
import BookDisplay from "./page/BookDisplay/BookDisplay";

function App() {
  return (
    <>

    <BookDisplay></BookDisplay>
    <Footer></Footer>
    </>
  );
}

export default App;

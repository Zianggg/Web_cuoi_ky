import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import PreviewBookList from "./component/PreviewBookList/PreviewBookList";
import BookPage from "./page/BookPage/BookPage";

function App() {
  return (
    <>
    
    <BookPage></BookPage>
    <Footer></Footer>
    </>
  );
}

export default App;

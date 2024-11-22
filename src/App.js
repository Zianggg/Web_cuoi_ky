import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import CategoryList from "./component/CategoryList/CategoryList";
import LandingPage from "./component/LandingPage/LandingPage";
import BookCard from "./component/BookCard/BookCard"



function App() {
  return (
    <>
    <div style={{height:'100px', marginLeft:'300px', marginTop:"300px"}}><BookCard title={'Witness for the Prosecution & Selected Plays'} author={'Raymond E. Feist;Joel Rosenberg	'} id={1} file={'http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api	'}></BookCard></div>
    
    </>
  );
}

export default App;

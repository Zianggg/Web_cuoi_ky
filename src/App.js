import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import CategoryList from "./component/CategoryList/CategoryList";
import LandingPage from "./component/LandingPage/LandingPage";
import BookCard from "./component/BookCard/BookCard"
import AdminPage from "./page/AdminPage/AdminPage";
import UserPage from "./page/User/UserPage";
import EditProfilePage from "./page/User/EditProfilePage/EditProfilePage";



function App() {
  return (
    <>
      <CategoryList></CategoryList>
    </>
  );
}

export default App;

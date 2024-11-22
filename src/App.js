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
import BookPage from "./page/BookPage/BookPage";

function App() {
  return (
    <>
    <BookPage id={1} title={"Gilead"} description={"A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.	"} authors={"Marilynne Robinson	"} file={"http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}/>
    </>
  );
}

export default App;

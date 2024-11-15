import NavBar from "./component/NavBar/NavBar";
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Footer from "./component/Footer/Footer";
import PreviewBookList from "./component/PreviewBookList/PreviewBookList";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <div style={{minHeight: "50rem"}}></div>
    <PreviewBookList></PreviewBookList>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;

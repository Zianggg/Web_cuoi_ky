import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import "./App.css"
import UserDashboard from './page/User/UserDashBoard/UserDashBoard';
import EditProfile from './page/User/EditProfile';
import BorrowHistory from './page/User/BorrowHistory';
import ChangePassword from './page/User/ChangePassword';
import ReportLostBook from './page/User/ReportLostBook';
import BookPage from './page/BookPage/BookPage';



function App() {
  return (
    <>
      <BookPage></BookPage>
    </>
  );
}

export default App;

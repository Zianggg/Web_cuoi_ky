import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import "./App.css"
import UserDashboard from './page/User/UserDashBoard/UserDashBoard';
import EditProfile from './page/User/EditProfile';
import BorrowHistory from './page/User/BorrowHistory';
import ChangePassword from './page/User/ChangePassword';
import ReportLostBook from './page/User/ReportLostBook';
import BookPage from './page/BookPage/BookPage';
import AdminSidebar from './page/Admin/AdminSidebar/AdminSideBar';
import ManageBooks from './page/Admin/ManageBooks';
import ManageBorrowBooks from './page/Admin/ManageBorrowBooks';
import ManageUsers from './page/Admin/ManageUsers';
import ManageCategory from './page/Admin/ManageCategory';
import UserProfileRoute from './Route/UserProfileRoute';
import NavBar from './component/NavBar/NavBar';



function App() {
  return (
    <>
      <NavBar/>
    </>
  );
}

export default App;

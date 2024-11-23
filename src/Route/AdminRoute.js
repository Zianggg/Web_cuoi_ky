import { Route, Router, Routes } from "react-router-dom";
import AdminSidebar from "../page/Admin/AdminSidebar/AdminSideBar";
import ManageBooks from "../page/Admin/ManageBooks";
import ManageBorrowBooks from "../page/Admin/ManageBorrowBooks";
import ManageUsers from "../page/Admin/ManageUsers";
import ManageCategory from "../page/Admin/ManageCategory";

function AdminRoute() {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<AdminSidebar/>}>
          <Route path="manage-books" element={<ManageBooks/>} />
          <Route path="manage-borrow-and-returned-books" element={<ManageBorrowBooks/>} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-category" element={<ManageCategory />} />
        </Route>
      </Routes>
    </Router>
    </> );
}

export default AdminRoute;
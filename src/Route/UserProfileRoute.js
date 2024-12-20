import { Route, Router, Routes } from "react-router-dom";
import UserDashboard from "../page/User/UserDashBoard/UserDashBoard";
import EditProfile from "../page/User/EditProfile";
import BorrowHistory from "../page/User/BorrowHistory";
import ChangePassword from "../page/User/ChangePassword";
import ReportLostBook from "../page/User/ReportLostBook";

function UserProfileRoute() {
    return (<>

    <Router>
      <Routes>
        <Route path="/" element={<UserDashboard />}>
          <Route path="profile-edit" element={<EditProfile />} />
          <Route path="borrow-history" element={<BorrowHistory />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="report-lost-book" element={<ReportLostBook />} />
        </Route>
      </Routes>
    </Router>

    </> );
}

export default UserProfileRoute;
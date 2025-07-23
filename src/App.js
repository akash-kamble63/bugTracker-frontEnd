import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ManageTask from "./pages/Admin/ManageTask";
import CreateTask from "./pages/Admin/CreateTask";
import Dashboard from "./pages/Admin/Dashboard";
import ManageUser from "./pages/Admin/ManageUser";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          {/**Public routes */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tasks" element={<ManageTask />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
          <Route path="/admin/users" element={<ManageUser />} />

          {/**Admin routes */}
          {/* {<Route  element={<PrivateRoutes allowedRoles={["admin"]}/>}>
            <Route path="/admin/dashboard" element={<Dashboard />}/>
            <Route path="/admin/tasks" element={<ManageTask />}/>
            <Route path="/admin/dashboard" element={<Dashboard />}/>
            <Route path="/admin/create-task" element={<CreateTask />}/>
            <Route path="/admin/users" element={<ManageUser />}/>
          </Route> */}

          {/**User routes */}
          <Route element={<PrivateRoutes allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route
              path="/user/task-details/:id"
              element={<ViewTaskDetails />}
            />
            <Route path="/user/create-task" element={<CreateTask />} />
            <Route path="/user/users" element={<ManageUser />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

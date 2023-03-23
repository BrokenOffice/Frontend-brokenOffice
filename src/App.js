import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import SignInSide from "./components/Login";
import { ReportMenu } from "./components/Service/ReportMenu";
import { AdminView } from "./components/Admin";
import OfficeList from "./components/Admin/Offices/OfficeList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <div><Toaster/></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile/>}/>
        <Route path="/login" element={<SignInSide/>}/>
        <Route path="/service/report/all" element={<ReportMenu />} />
        <Route path="/admin/users" element={<AdminView />} />
        <Route path="/admin/offices" element={<OfficeList />} />
      </Routes>
    </div>
  );
}

export default App;

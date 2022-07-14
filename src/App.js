import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";
import "./App.css";
import SignIn from "./Components/Auth/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/Contact/ContactUs";
import Login from "./Components/Login/Login";
import UserProfile from "./Components/UserProfile/UserProfile";
import ListOfUsers from "./Components/Users/ListOfUsers";
import ListOfCases from "./Components/Cases/ListOfCases";
import ListOfMessage from "./Components/Messages/ListOfMessage.js";
import MessageDetails from "./Components/DetailsCards/MessageDetails";
import CaseDetails from "./Components/DetailsCards/CaseDetails";
import UserDetails from "./Components/DetailsCards/UserDetails";
import AddUser from "./Components/AddUser/AddUser";
import ConsultCase from "./Components/ConsultCase/ConsultCase";
import AddCase from "./Components/AddCase/AddCase";
import CaseLawyer from "./Components/CasLawyer/CaseLawyer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Login/>} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
    
              <Route path="/profile" element={<UserProfile />}/>

                <Route path="/profile/:case" element={<CaseLawyer />} />
              
            
            
              <Route path="/ConsultCase" element={<ConsultCase />} />
              <Route path="/admin" element={<Dashboard />}>
                <Route path="users" element={<ListOfUsers />} />
                <Route path="users/:id" element={<UserDetails />} />
                <Route path="cases" element={<ListOfCases />} />
                <Route path="cases/:id" element={<CaseDetails />} />
                <Route path="messages" element={<ListOfMessage />} />
                <Route path="messages/:id" element={<MessageDetails />} />
                <Route path="addCase" element={<AddCase />} />
                <Route path="addUser" element={<AddUser />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

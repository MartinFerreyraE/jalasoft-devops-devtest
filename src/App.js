import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import LandingPage from "./views/LandingPage";
import Signin from "./views/Onboarding/signing";
import SignUp from "./views/Onboarding/SignUp";
import Messages from "./views/Messages/index";
import ForgotPassword from "./views/Onboarding/ForgotPassword";
import SignInWithoutPassword from "./views/Onboarding/SignInWithoutPassword";
import NoMatch from "./views/NoMatch";
import ContactList from "./views/Contacts/components/ContactList";
import Contacts from "./views/Contacts";
import CreateContact from "./views/Contacts/components/CreateContact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/magiclogin" element={<SignInWithoutPassword />} />
        <Route exact path="/contacts/all" element={<ContactList />} />
        <Route exact path="/contacts/" element={<Contacts />} />
        <Route exact path="/contacts/new" element={<CreateContact />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="*" element={<NoMatch />} />
        
         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

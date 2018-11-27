import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import LoginSignup from "../Containers/LoginSignup";
import ContactForm from "../Containers/ContactForm/Contact";

const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/aboutus",
    component: AboutUs
  },
  {
    path: "/contactus",
    component: ContactForm
  },
  {
    path: "/loginRegister",
    component: LoginSignup
  }
];

export default Routes;

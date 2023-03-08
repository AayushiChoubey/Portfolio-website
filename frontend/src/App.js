
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser} from "./actions/user";
function App() {
  const dispatch = useDispatch();

  // const { isAuthenticated } = useSelector((state) => state.login);
  // const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
   // dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/account" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;

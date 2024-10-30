import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Direction from "./pages/direction/Direction";
import Certificates from "./pages/certificates/Certificates";
import Reviews from "./pages/reviews/Reviews";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./components/footer/Footer";
// import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <div  className="wrapper">
        <Header/>
        <Home/>
        {/*<Routes>*/}
        {/*  <Route path="/about" element={<About/>} />*/}
        {/*  <Route path="/direction" element={<Direction/>} />*/}
        {/*  <Route path="/certificates" element={<Certificates/>} />*/}
        {/*  <Route path="/reviews" element={<Reviews/>} />*/}
        {/*  <Route path="/contacts" element={<Contacts/>} />*/}
        {/*</Routes>*/}
        <About id="about"/>
        <Direction id="direction"/>
        <Certificates id="certificate"/>
        <Reviews id="reviews"/>
        <Contacts id="contacts"/>
        <Footer/>

      </div>
    </>
  );
}

export default App;

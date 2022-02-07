import "./App.css";
import Carousel from "./Carousel";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Home from "./HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

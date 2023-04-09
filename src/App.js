import "./App.css";
import Creations from "./Components/Creations";
import CreationsDesktop from "./Components/CreationsDesktop";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Interactive from "./Components/Interactive";

function App() {
  return (
    <div className="App">
      <Header />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </div>
  );
}

export default App;

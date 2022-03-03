import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import "./App.css"

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="sections">
                <About />
                <Contact />
            </div>
        </div>
    );
}
export default App;
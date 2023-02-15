import './App.css';
import Header from "./components/Header";
import Mein from "./components/Mein";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Mein/>
            <Footer/>
        </div>
    );
}

export default App;

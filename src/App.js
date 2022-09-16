import "./App.css";
import Todos from "./components/todos";
import Modal from "./components/modal";
import Header from "./components/header";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
    return (
        <div className="App">
            <Modal />
            <div className="container-fluid my-container">
                <div className="row header">
                    <Header />
                </div>
                <div className="row todos">
                    <Todos />
                </div>
                <div className="row footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;

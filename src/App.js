import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Middle from "./components/Middle";
import './index.css';

function App() {
    return (
        <div style={{
            backgroundImage: `url("https://raindance.org/wp-content/uploads/2021/05/film-2205325_1920.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <Header/>
            <main>
                <Container>
                    <div className="mid">
                        <Middle/>
                    </div>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
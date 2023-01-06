import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Header></Header>
            <Middle></Middle>
            <Footer></Footer>
            <div style={{backgroundImage: `url("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '84vh' }}>
            </div>
        </>
    );
}

export default Home;
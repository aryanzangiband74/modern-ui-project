import "./App.css";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import Cta from "./components/cta/Cta";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
    );
}

export default App;

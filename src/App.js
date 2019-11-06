import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Footer from './components/Footer/Footer';
import Disclosure from './components/Disclosure/Disclosure';
import Article from './components/Article/Article';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Article />
        <Disclosure />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

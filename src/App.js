import React, { Component } from 'react';
import Header from './components/Header/Header'
import './App.css';
import Footer from './components/Footer/Footer';
import Disclosure from './components/Disclosure/Disclosure';
import Article from './components/Article/Article';
import SignUp from './components/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Article />
          <SignUp />
          <Disclosure />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;

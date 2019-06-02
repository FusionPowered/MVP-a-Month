import React from 'react';
import logo from "./images/mvpadaylogo.png";
import bgImg from "./images/laddergappie.png";
import './App.css';

function App() {
  const PRODUCTS = ['Code Commenter', 'Code Commenter', 'Code Commenter', 'Code Commenter','Code Commenter', 'Code Commenter', 'Code Commenter', 'Code Commenter','Code Commenter','Code Commenter','Code Commenter'];

  const renderLogo = () =>
    <div className="logobar">
      <p>MVP-A-MONTH</p>
      <img className="logo" alt="logo" src={logo}/>
    </div>

  const renderProductHighlight = () =>
    <div className="highlight">
      <div className="highlight-image">
        <div className="highlight-video"/>
        <img className="highlight-background" src={bgImg} alt="background"/>
      </div>
      <div className="highlight-content">
        <h2>Lorem ipsum</h2>
        <p>Phasellus a est. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce fermentum odio nec arcu. Praesent congue erat at massa. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Phasellus a est. Nullam dictum felis eu pede mollis pretium. Aliquam eu nunc. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Praesent nonummy mi in odio.</p>
        <a className="cta" href="./">Get it right now!</a>
      </div>
    </div>

  const renderProductTiles = () => {
    const renderedTiles = [];
    for (let i = 0; i < PRODUCTS.length; i++) {
      renderedTiles.push(renderTile(PRODUCTS[i]));
    }
    return <div className="product-tiles">{renderedTiles}</div>
  }

  const renderTile = (prodName) =>
    <div className="product-tile"><p>{prodName}</p></div>

  return (
    <div className="App">
      { renderLogo() }
      { renderProductHighlight() }
      { renderProductTiles() }
    </div>
  );
}

export default App;
